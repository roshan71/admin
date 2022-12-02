import FormLayout from "../../components/layouts/formLayout"




const secert=require("../../utils/setSercet")
const User=()=>{
   
    console.log(secert.default.secert)

      console.log(process.env.APIKEY)
      return(
        <>
      
        <FormLayout>
        </FormLayout>
        </>
    )
}

export default User
