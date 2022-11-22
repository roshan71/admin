import { useRouter } from "next/router";

const RequestCard =(props)=>{
    
     return(
    <>
   
    <div className=" flex flex-row justify-between  bg-white rounded" style={{width:"95%",margin:'5px',padding:'20px'}}>
    
        <div className="flex flex-col">
            <h2><b>Message : </b>{props.message}</h2>
            <h3><b>User : </b> {props.user}</h3>
        </div>
       
    </div>
    <br></br>
    </>
 )   
}
export default RequestCard