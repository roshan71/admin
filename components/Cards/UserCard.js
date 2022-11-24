import { useRouter } from "next/router";
import { collection, addDoc,getFirestore, doc, deleteDoc } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import { app } from "../../utils/firebase";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { async } from "@firebase/util";
import FormLayout from "../layouts/formLayout";
const UserCard =(props)=>{
    const router = useRouter();
    //  const  showAlert  = useContext(FormLayout);
 
    useEffect(() => {
     
      }, []);
    const handleDelete=async(e,id)=>{
       
        e.stopPropagation()
        const db = getFirestore(app);
        const docRef = doc(db,'users',id);
      await deleteDoc(docRef).then(()=>{
        alert("User Deleted SuccessFully")
        router.reload(window.location.pathname);
       
      })
      //showAlert("error","Deleted");
      
    //   showAlert('error', `Todo with id ${id} is deleted successfully`)
    }
    const handleEdit=(e,id)=>{
      e.preventDefault();
      router.push(
         {
            pathname:"/User/UserEdit",
            query:{
               id
            }
         }
      )
    }
     return(
    <>
   
    <div className=" flex flex-row justify-between  bg-white rounded" style={{width:"95%",margin:'10px',padding:'20px'}}>
    
        <div className="flex flex-col">
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
        </div>
        <div className="">
       
        <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                       onClick={(e)=>handleEdit(e,props.id)}
                   >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                       onClick={(e)=>handleDelete(e,props.id)}
                   >
                      Delete
                    </button>
            
        </div>
    </div>
    <br></br>
    </>
 )   
}
export default UserCard