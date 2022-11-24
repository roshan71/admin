import { useRouter } from "next/router";

import { collection, getDoc,getFirestore, doc, deleteDoc, setDoc } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import { app } from "../../utils/firebase";
import { async } from "@firebase/util";
import { useEffect,useState } from "react";
const RequestCard =(props)=>{
    const [user,setUser]=useState();

    useEffect(()=>{
        getUser();
      
    },[])

    const getUser=async()=>{
        const db=getFirestore(app);
      
        const docRef=doc(db,'users',props.userid.toString())
        const docSnap = await getDoc(docRef);
        const d=docSnap.data();
        setUser(d.name)
    }
     return(
    <>
   
    <div className=" flex flex-row justify-between  bg-white rounded" style={{width:"95%",margin:'5px',padding:'20px'}}>
    
        <div className="flex flex-col">
            <h2><b>Message : </b>{props.message}</h2>
            <h3><b>User : </b> {user}</h3>
        </div>
       
    </div>
    <br></br>
    </>
 )   
}
export default RequestCard