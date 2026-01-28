import type { FieldValue, Timestamp } from "firebase/firestore";

export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
  createdAt: Timestamp | FieldValue;
  updatedAt: Timestamp | FieldValue;
}