import Link from "next/link"
import PropertyCard from "../../components/Cards/PropertyCard"
import Sidebar from "../../components/SideBar"
import { useState,useEffect } from "react"
import { getRoom } from "../../utils/property"
const Property=(e)=>{
  
    const [roomList, setRoomList] = useState([]);
    useEffect(() => {
      setRoom();
    }, []);
    const setRoom = async () => {
      var list = await getRoom();
      console.log(list);
      setRoomList(list);
    };

    
    return(<>
     <Sidebar/>
    
    <div className=" md:ml-64  " style={{backgroundColor: "rgb(220 252 231)" ,padding:"10px",minHeight:"100vh"}}>
    <Link href="/Property/AddProperty">
                <div className={"inline-flex m-2 justify-center rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}>
                    Add Property
                 </div>
                </Link>
    <div  >
    
     <div>
     {roomList.map((e) => ( 
            <PropertyCard  key={e[0]['id']} id={e[0]['id']} name={e[1]['name']} addr={e[1]['address']} price={e[1]['price']} currency={e[1]['currency']} desc={e[1]['shortDes']} imgsrc={e[1]['img']}/>
          ))}
      
     </div>
      </div>
      </div>


    </>)
}

export default Property