import { Timestamp } from "firebase/firestore"

export type User = {
  photoURL: string
  am?: boolean
  pm?: boolean
  displayName: string
  searchableDisplayName: string
  id: string
  blockedUsers?: string[]
  sentFriendRequests?: string[]
  redactedFriendRequests?: string[]
  friends?: string[]
  joinDate: Timestamp
  isBanned: boolean
}
