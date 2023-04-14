import { Checkbox, FormControlLabel } from "@mui/material"
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
import { Auth } from "../../../containers/Auth"

interface Props {
  day: number
  isSelected: boolean
}

const db = getFirestore(firebaseApp)

export const DayCard: React.FC<Props> = ({ day, isSelected }) => {
  const { auth } = Auth.useContainer()

  const todaysDate = dayjs()
  const dateOffsetValue = day - 50
  const offsetTileDate = todaysDate.add(dateOffsetValue, "day")
  const prettyDate = offsetTileDate.format("MMMM D, YYYY")
  const firestoreDate = prettyDate.valueOf()
  const dayDocRef = doc(db, "families", auth?.currentUser?.uid + "-family", "days", firestoreDate.toString())

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
                color: "#ca8a04", // tailwind yellow-600
                "&.Mui-checked": {
                  color: "#eab308", // tailwind yellow-500
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
                color: "#ea580c", // tailwind orange-600
                "&.Mui-checked": {
                  color: "#f97316", // tailwind orange-500
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
