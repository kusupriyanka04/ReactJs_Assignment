import { db } from "@/firebase/firebaseConfig"
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore"

const todosRef = collection(db, "todos")

export const getTodos = async () => {
  const snap = await getDocs(todosRef)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const createTodo = (title) =>
  addDoc(todosRef, { title, completed: false })

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data)

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id))
