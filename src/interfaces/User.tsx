import { Timestamp } from "firebase/firestore"

export type User = {
  photoURL: string
  displayName: string
  searchableDisplayName: string
  id: string
  blockedUsers?: string[]
  sentFamilyRequests?: string[]
  redactedFamilyRequests?: string[]
  familyMembers?: string[]
  joinDate: Timestamp
  isBanned: boolean
}
