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
      runTransaction(db, async (transaction) => {
        const doc = await transaction.get(userDoc)
        if (!doc.exists()) {
          transaction.set(userDoc, {
            walletAddress: "",
            photoURL: auth.currentUser!.photoURL!,
            displayName: auth.currentUser!.displayName!,
            searchableDisplayName: auth.currentUser!.displayName!.toLowerCase(),
            id: auth.currentUser!.uid,
            hasNewNotifications: false,
            blockedUsers: [],
            sentFriendRequests: [],
            redactedFriendRequests: [],
            friends: [],
            joinDate: serverTimestamp(),
            moderatorLevel: 0,
            isBanned: false,
          })
        }
      })
    }

    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider).then(addToUsers).catch(console.error)
  }

  const signOutWithGoogle = async () => {
    auth.signOut()
    localStorage.setItem("isWalletConnected", "false")
    localStorage.setItem("walletAddress", "")
  }

  return {
    user,
    auth,
    signInWithGoogle,
    signOutWithGoogle,
  }
}

export const Auth = createContainer(useAuth)
