import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { createContainer } from "unstated-next"
import { BigNumber, ethers } from "ethers"
import { parseEther } from "ethers/lib/utils"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth"
import { firebaseApp } from "../../firestore.config"
import {
  getFirestore,
  doc,
  serverTimestamp,
  runTransaction,
  DocumentReference,
} from "firebase/firestore"
import { User } from "../interfaces/User"

const db = getFirestore(firebaseApp)

const useAuth = () => {
  const auth = getAuth(firebaseApp)

  const [user] = useAuthState(auth)

  const signInWithGoogle = async (): Promise<void> => {
    const addToUsers = async (userCred: UserCredential | null) => {
      if (!userCred?.user?.uid || !auth.currentUser) return
      const userDoc = doc(
        db,
        "users",
        auth.currentUser!.uid,
      ) as DocumentReference<User>
      const familyDoc = doc(db, "families", auth.currentUser!.uid + "-family")
      runTransaction(db, async (transaction) => {
        const doc = await transaction.get(userDoc)
        if (!doc.exists()) {
          transaction.set(userDoc, {
            photoURL: auth.currentUser!.photoURL!,
            displayName: auth.currentUser!.displayName!,
            joinDate: serverTimestamp(),
            am: false,
            pm: false,
            searchableDisplayName: auth.currentUser!.displayName!.toLowerCase(),
            id: auth.currentUser!.uid,
            blockedUsers: [],
            sentFriendRequests: [],
            redactedFriendRequests: [],
            friends: [auth.currentUser!.uid! + "-family"],
            isBanned: false,
          })
          transaction.set(familyDoc, {
            users: [auth.currentUser!.uid],
          })
        }
      })
    }

    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider).then(addToUsers).catch(console.error)
  }

  const signOutWithGoogle = async () => {
    auth.signOut()
  }

  return {
    user,
    auth,
    signInWithGoogle,
    signOutWithGoogle,
  }
}

export const Auth = createContainer(useAuth)
