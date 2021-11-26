import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase"

const q = query(collection(db, "products"));

export async function getAll() {
 
    q.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      return (doc.id, " => ", doc.data());
    });
    
}


