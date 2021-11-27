import { getFirestore, collection, query, where, getDocs } from "@firebase/firestore";
import {db} from '../firebase'

export async function getUserInfo() {

    const userCollectionRef = collection(db, "users");
    const querySnapshot = await getDocs(userCollectionRef);
    

}






