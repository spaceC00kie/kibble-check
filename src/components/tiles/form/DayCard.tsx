import { useEffect, useState } from "react"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import { blue, green, orange, yellow } from "@mui/material/colors"
import {
  collection,
  doc,
  DocumentData,
  DocumentReference,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore"

import { Auth } from "../../../containers/Auth"
import { firebaseApp } from "../../../../firestore.config"
import { User } from "../../../interfaces/User"

const db = getFirestore(firebaseApp)

export const DayCard: React.FC = () => {
  const { user, auth } = Auth.useContainer()

  const [am, setAm] = useState(false)
  const [pm, setPm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const userDocRef = auth?.currentUser?.uid
    ? (doc(db, "users", auth.currentUser!.uid) as DocumentReference<User>)
    : null
  const storeUserAmInFirestore = (am: boolean) => {
    if (userDocRef) updateDoc(userDocRef, { am })
  }

  const storeAmInFirestore = (am: boolean) => {
    if (userDocRef) updateDoc(userDocRef, { am })
  }

  const storePmInFirestore = (pm: boolean) => {
    if (userDocRef) updateDoc(userDocRef, { pm })
  }

  useEffect(() => {
    if (userDocRef)
      getDoc(userDocRef)
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
    storeUserAmInFirestore(!am)
    setAm(!am)
  }
  const handlePmOnChange = () => {
    storePmInFirestore(!pm)
    setPm(!pm)
  }
  return (
    <div>
      {user && (
        <div className="m-5 flex justify-between gap-3 rounded-md border border-yellow-500 border-opacity-50 bg-red-800 bg-opacity-70 p-2 font-bold text-yellow-50">
          <div className="mx-1 flex items-center justify-between rounded border border-yellow-500 p-1">
            Date Here
          </div>
          {isLoading && <div className="w-22">Loading...</div>}
          {!isLoading && (
            <div className="flex justify-center">
              <FormControlLabel
                checked={am}
                onChange={handleAmOnChange}
                control={
                  <Checkbox
                    size="small"
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
                checked={pm}
                onChange={handlePmOnChange}
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: blue[800],
                      "&.Mui-checked": {
                        color: green[600],
                      },
                    }}
                  />
                }
                label="PM"
              />
            </div>
          )}{" "}
        </div>
      )}
    </div>
  )
}
