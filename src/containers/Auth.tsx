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
import { checkForMetamask } from "../components/prompts/CheckForMetamask"

declare let window: any
const db = getFirestore(firebaseApp)

const useAuth = () => {
  const [walletAddress, setWalletAddress] = useState(
    localStorage.getItem("walletAddress") !== null
      ? localStorage.getItem("walletAddress")
      : "",
  )
  const [isWalletConnected, setIsWalletConnected] = useState(
    localStorage.getItem("isWalletConnected") !== null
      ? localStorage.getItem("isWalletConnected")! === "true"
      : false,
  )

  const auth = getAuth(firebaseApp)

  const [user] = useAuthState(auth)

  const [isWalletConnecting, setIsWalletConnecting] = useState(false)


  //*** use this code to couple wallet and firebase auth */
  // const connectWallet = async () => {
  //   if (!user) {
  //     signInWithGoogle()
  //     return
  //   }
  //   if (typeof window.ethereum === undefined) {
  //     CustomSwal("error", "Error", "Metamask is not installed")
  //     return
  //   }
  //   try {
  //     setIsWalletConnecting(true)
  //     const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
  //     await provider.send("eth_requestAccounts", [])
  //     const signer = provider.getSigner()
  //     const walletAddress = await signer.getAddress()
  //     const userDoc = doc(db, "users", auth.currentUser!.uid)
  //     updateDoc(userDoc, {
  //       walletAddress,
  //     })
  //       .then(() => {
  //         setIsWalletConnected(true)
  //         setIsWalletConnecting(false)
  //         setWalletAddress(walletAddress)
  //         localStorage.setItem("walletAddress", walletAddress)
  //         localStorage.setItem("isWalletConnected", "true")
  //       })
  //       .then(() => {
  //         CustomSwal("success", "Success", "Wallet connected")
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //         CustomSwal(
  //           "error",
  //           "Connection Failed",
  //           "Error connecting to wallet.",
  //         )
  //         setIsWalletConnected(false)
  //       })
  //   } catch (error) {
  //     console.error(error)
  //     CustomSwal("error", "Connection Failed", "Error connecting to wallet.")
  //     setIsWalletConnecting(false)
  //   }
  // }

  // const disconnectWallet = async () => {
  //   if (!auth.currentUser) return
  //   const userDoc = doc(db, "users", auth.currentUser!.uid)
  //   updateDoc(userDoc, {
  //     walletAddress: "",
  //   })
  //     .then(() => {
  //       setWalletAddress("")
  //       setIsWalletConnected(false)
  //       localStorage.setItem("walletAddress", "")
  //       localStorage.setItem("isWalletConnected", "false")
  //     })
  //     .catch(() => {
  //       CustomSwal("error", "Error", "Error disconnecting wallet")
  //     })
  // }

  const connectWallet = async () => {
    if (!checkForMetamask()) return
    setIsWalletConnecting(true)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
      await provider.send("eth_requestAccounts", [])
      const signer = provider.getSigner()
      const walletAddress = await signer.getAddress()
      setIsWalletConnected(true)
      setIsWalletConnecting(false)
      setWalletAddress(walletAddress)
      localStorage.setItem("walletAddress", walletAddress)
      localStorage.setItem("isWalletConnected", "true")
    } catch (error: any) {
      console.error(error as Error)
      if (error.code === -32002) return
      setIsWalletConnecting(false)
      checkForMetamask()
    }
  }

  const disconnectWallet = async () => {
    setWalletAddress("")
    setIsWalletConnected(false)
    localStorage.setItem("walletAddress", "")
    localStorage.setItem("isWalletConnected", "false")
  }

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
        } else if (doc.data().walletAddress ?? "" !== "") {
          setIsWalletConnected(true)
          localStorage.setItem("isWalletConnected", "true")
          setWalletAddress(doc.data().walletAddress)
          localStorage.setItem("walletAddress", doc.data().walletAddress)
        }
      })
    }

    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider).then(addToUsers).catch(console.error)
  }

  const signOutWithGoogle = async () => {
    auth.signOut()
    setIsWalletConnected(false)
    setWalletAddress("")
    localStorage.setItem("isWalletConnected", "false")
    localStorage.setItem("walletAddress", "")
  }

  const doesUserHaveEnoughAvax = async (price: number) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
    const balance: BigNumber = await provider.getBalance(walletAddress!)
    return balance.gte(parseEther(price.toString()))
  }

  return {
    user,
    auth,
    connectWallet,
    disconnectWallet,
    isWalletConnected,
    setIsWalletConnected,
    walletAddress,
    setWalletAddress,
    signInWithGoogle,
    signOutWithGoogle,
    isWalletConnecting,
    doesUserHaveEnoughAvax,
  }
}

export const Auth = createContainer(useAuth)
