import Link from "next/link"
import RequestCard from "../../components/Cards/RequestCard"
import Sidebar from "../../components/SideBar"
import { useState,useEffect } from "react"
import { getRequest } from "../../utils/specRequest"
const Property=(e)=>{
    const [requestList, setRequestList] = useState([]);
     useEffect(() => {
       setRequest();
     }, []);
     const setRequest = async () => {
       var list = await getRequest();
       console.log(list);
   setRequestList(list);
    };
    console.log(requestList)
    return(<>
     <Sidebar/>
     <div className=" md:ml-64  " style={{backgroundColor: "rgb(220 252 231)" ,padding:"10px",minHeight:"100vh"}}>
     <div  >
    
    <div>
   
        
     
    </div>
     </div>
    </div>
    
     

    </>)
}

export default Property