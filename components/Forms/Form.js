import { async } from '@firebase/util';
import { requestToBodyStream } from 'next/dist/server/body-streams';
import React, { useEffect, useState } from 'react';
import { collection, addDoc,getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import { app } from "../../utils/firebase";
import { useRouter } from 'next/router';
import { initializeApp } from "firebase/app";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  
} from "firebase/storage";
import { v4 } from "uuid";
export default function Form() {
  const router=useRouter();
  const [name1, setName] = useState();
  const [email1, setEmail] = useState();
  const [address1, setAddress] = useState();
  const [profile1, setProfile] = useState();
  const [imageUpload, setImageUpload] = useState(null);
  const [isUploaded, setUploaeded] = useState(false);

  const handleImage = async (e) => {
    setImageUpload(e.target.files[0])
  }
  const upload = async (e) => {
    e.preventDefault()
    if (imageUpload !== null) {
      const storage = getStorage();
      const imageref = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageref, imageUpload).then((snapshot) => {
        console.log("isdivb")
        setUploaeded(true)
        console.log(isUploaded)
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url)
          setImageUpload(url);
        });
      });
    }
  }
  useEffect(() => {
      

  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log(name1,email1,address1,imageUpload);






    const data = {

      "name": name1.toString(),
      "location": address1.toString(),
      "email": email1.toString(),
      "profile": imageUpload.toString()

    }
    //     console.log(data)
    //          const db = getFirestore(app);
    //  const usersCol = collection(db, 'users');
    //    const usersSnapshot = await addDoc(usersCol,{data});

    // const userList = usersSnapshot.docs.map(doc => doc.data());
    //   console.log(userList);
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "users"), data);
    if(docRef.id){
      alert("Added User Successfully!!");
      router.push("/User")
    }
      
     
    console.log(docRef);
    //  await pushUser.doc("ivhidhfvihbhvidf").set(data)
    // console.log(docRef);

  }
  const handleCancel=(e)=>{
    e.preventDefault();
    router.push("/User");
  }
  return (
    <>
      <div className="bg-blueGray-400 justify-center flex h-screen">

        <div className="w-1/2 mt-[5rem] ">
          <br></br>



          <div className=" bg-white rounded  ">
            <form action="#" method="POST">
              <div className="  justify-center flex">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Add User</h3>
              </div>
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      required
                      id="first-name"
                      onChange={e => setName(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>


                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      required
                      id="email-address"
                      onChange={e => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>



                  <div className="col-span-6">
                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      name="street-address"
                      id="street-address"
                      onChange={e => setAddress(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-7 flex flex-row">
                    <label htmlFor="profile" className="block text-sm font-medium text-gray-700">
                      Profile Picture
                    </label>

                    <input
                    required
                      accept="image/png, image/gif, image/jpeg"
                      type="file"
                      onChange={handleImage}
                      className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >

                    </input>
                    <div className={isUploaded?"visible":"invisible"}>
                    <div  className="fas fa-check fa-book mr-2 text-l text-green-300"/>
                  
                    </div>
                    <div className={isUploaded?"invisible":"visible"}>
                    <button
                  type="button"
                  
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={upload}
                >
                  Upload
                </button>
                    </div>
                  </div>
                </div>

              </div>


              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                  
                  type="submit"
                  className="inline-flex justify-center mr-3 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleSubmit}
                >
                  Add
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>




    </>
  )
}