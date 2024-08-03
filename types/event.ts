import {type Timestamp } from "firebase/firestore"

interface Event {
  id: string
  bodyText: string
  updatedAt: Timestamp
}

export type { Event }
