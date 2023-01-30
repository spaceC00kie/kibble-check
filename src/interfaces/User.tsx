import { Timestamp } from "firebase/firestore"

export type User = {
  photoURL: string
  displayName: string
  searchableDisplayName: string
  walletAddress: string
  id: string
  hasNewNotifications: boolean
  blockedUsers: string[]
  sentFriendRequests: string[]
  redactedFriendRequests: string[]
  friends: string[]
  joinDate: Timestamp
  moderatorLevel: 0 | 1 | 2
  isBanned: boolean
}
