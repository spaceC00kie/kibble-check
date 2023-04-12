import { Checkbox, FormControlLabel } from "@mui/material"
import { green, yellow, red } from "@mui/material/colors"
import dayjs from "dayjs"
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { firebaseApp } from "../../../../firestore.config"

interface Props {
  day: number
  isSelected: boolean
}

const db = getFirestore(firebaseApp)

export const DayCard: React.FC<Props> = ({ day, isSelected }) => {
  const todaysDate = dayjs()
  const dateOffsetValue = day - 50
  const offsetTileDate = todaysDate.add(dateOffsetValue, "day")
  const prettyDate = offsetTileDate.format("MMMM D, YYYY")
  const firestoreDate = prettyDate.valueOf()

  const [am, setAm] = useState(false)
  const [pm, setPm] = useState(false)

  const daysColRef = collection(db, "days")
  const dayDocRef = doc(daysColRef, firestoreDate.toString())

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
    <div className="flex w-96 justify-between overflow-clip whitespace-nowrap rounded-md border border-yellow-600 bg-red-900 p-6 text-2xl font-semibold text-yellow-50">
      <div>{prettyDate}</div>
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
                color: yellow[800],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
          }
          label="AM"
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
                color: red[600],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
          }
          label="PM"
        />
      </div>
    </div>
  )
}
