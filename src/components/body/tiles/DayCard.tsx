import { Checkbox, FormControlLabel } from "@mui/material"
import dayjs from "dayjs"
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { firebaseApp } from "../../../../firestore.config"
import { Auth } from "../../../containers/Auth"
import { Date } from "../../../containers/Date"
import advancedFormat from "dayjs/plugin/advancedFormat"

dayjs.extend(advancedFormat)

interface Props {
  day: number
  isSelected: boolean
  tileLength: number
}

const db = getFirestore(firebaseApp)

export const DayCard: React.FC<Props> = ({ day, isSelected, tileLength }) => {
  const { auth } = Auth.useContainer()
  const { setSelectedTileDate } = Date.useContainer()

  useEffect(() => {
    if (isSelected) setSelectedTileDate(offsetTileDate)
  }, [isSelected])

  const todaysDate = dayjs()
  const dateOffsetValue = day - tileLength / 2
  const offsetTileDate = todaysDate.add(dateOffsetValue, "day")
  const prettyDate = offsetTileDate.format("Do, dddd")
  const firestoreDate = prettyDate.valueOf()
  const dayDocRef = doc(
    db,
    "families",
    auth?.currentUser?.uid + "-family",
    "days",
    firestoreDate.toString(),
  )

  const [am, setAm] = useState(false)
  const [pm, setPm] = useState(false)

  const storeAmInFirestore = (am: Boolean) => {
    setDoc(dayDocRef, { am }, { merge: true })
  }

  const storePmInFirestore = (pm: Boolean) => {
    setDoc(dayDocRef, { pm }, { merge: true })
  }

  useEffect(() => {
    getDoc(dayDocRef)
      .then((doc) => {
        setAm(doc.data()?.am ?? false)
        setPm(doc.data()?.pm ?? false)
      })
      .then(() => {
        setIsLoading(false)
      })
  }, [])

  const handleAmOnChange = () => {
    storeAmInFirestore(!am)
    setAm(!am)
  }
  const handlePmOnChange = () => {
    storePmInFirestore(!pm)
    setPm(!pm)
  }

  const [isLoading, setIsLoading] = useState(true)

  const loadingStyle = isLoading ? "animate-pulse" : ""

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div>{prettyDate}</div>
      <div className="w-1/2">
        <div>
          <FormControlLabel
            checked={am}
            onChange={handleAmOnChange}
            control={
              <Checkbox
                className={loadingStyle}
                disabled={!isSelected}
                size="medium"
                sx={{
                  color: "#ca8a04", // tailwind yellow-600
                  "&.Mui-checked": {
                    color: "#eab308", // tailwind yellow-500
                  },
                }}
              />
            }
            label="am"
          />
          <FormControlLabel
            className={loadingStyle}
            checked={pm}
            onChange={handlePmOnChange}
            control={
              <Checkbox
                disabled={!isSelected}
                size="medium"
                sx={{
                  color: "#ea580c", // tailwind orange-600
                  "&.Mui-checked": {
                    color: "#f97316", // tailwind orange-500
                  },
                }}
              />
            }
            label="pm"
          />
        </div>
      </div>
    </div>
  )
}
