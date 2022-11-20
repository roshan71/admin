import SideBar from "../SideBar";
import Form from "../Forms/Form";
import { useEffect, useState } from "react";
import { getUsers } from "../../utils/user";
import Grid from '@mui/material/Grid';
import Image from "next/image";
import UserCard from "../Cards/UserCard";
import { height } from "@mui/system";
const FormLayout = ({ children }) => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    setUser();
  }, []);
  const setUser = async () => {
    var list = await getUsers();
    setUserList(list);
  };
  return (
    <>
    <div className=" md:ml-64  " style={{backgroundColor: "rgb(74 222 128)" ,minHeight:"100vh"}}>
      <SideBar />
      

{userList.map((e) => ( 
            <UserCard name={e['name']} email={e['email']}/>
          ))}
     
      </div>
    </>
  );
};

export default FormLayout;
