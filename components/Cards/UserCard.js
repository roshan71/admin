import { useRouter } from "next/router";

const UserCard =(props)=>{
    const router = useRouter();
    const handleEdit=(e)=>{
        e.preventDefault()
        router.pathname.indexOf("/User/addUser")
        
    }
    const handleDelete=(e)=>{}
     return(
    <>
    <br></br>
    <div className=" flex flex-row justify-between  bg-white rounded" style={{width:"50%",margin:'10px',padding:'20px'}}>
    
        <div className="flex flex-col">
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
        </div>
        <div className="">
        <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                       onClick={handleEdit}
                   >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                       onClick={handleDelete}
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