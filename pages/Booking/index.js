
import BookingCard from "../../components/Cards/BookingCard";
import Sidebar from "../../components/SideBar";
import { useState,useEffect } from "react"
import { getBooking } from "../../utils/bookings"
const Booking=(e)=>{
    const [bookingList, setBookingList] = useState([]);
   
    useEffect(() => {
      setBooking();
    }, []);
    const setBooking = async () => {
      var list = await getBooking();
      console.log(list);
      setBookingList(list);

   
    };

    return(
    <>
     <Sidebar/>
     <div className=" md:ml-64  " style={{backgroundColor: "rgb(220 252 231)" ,padding:"10px",minHeight:"100vh"}}>
   <div  >
   
    <div>
    {bookingList.map((e) => ( 
            <BookingCard id={e[0]['id']} custName={e[1]['custName']} bookDate={e[1]['bookDate']} price={e[1]['amount']} status={e[1]['status']}/>

          ))}
      
     </div>
     </div>
     </div>




    </>)
}

export default Booking