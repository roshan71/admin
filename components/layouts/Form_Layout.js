import SideBar from "../SideBar";
import Form from "../Forms/Form";


const Form_Layout=({children})=>{
    return(
    <>
        <SideBar/>
        <div className="relative md:ml-64 bg-blueGray-100">
          <div>
            <div>
              Current Users.
             
            </div>
            <div className="bg-gray-700">
                <div className="bg-red-100 text-xl">Add User</div>
              </div>
          
        
          </div>
        
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div>
         
            <div className="flex flex-wrap">
                {children}
                </div></div></div></div>
        
    </>
    )
}

export default Form_Layout;




