import React, { useEffect, useState } from 'react';
import {floor} from "mathjs";
import { collection, getDoc,setDoc,getFirestore,doc } from "firebase/firestore"; 
import { getStorage, ref,
  uploadBytes,
  getDownloadURL,} from "firebase/storage";
import { app } from "../../utils/firebase";
import { v4 } from 'uuid';
import { useRouter } from 'next/router';

import { async } from '@firebase/util';
export default function Properties() {
    const [name, setName] = useState();
    const router=useRouter();
    const [address, setAddress] = useState();
    const [currrency, setCurrency] = useState();
    const [image,setImage] =useState();
    const [price,setPrice] =useState(0);
    const [short,setShortDesc] =useState();
    const [long,setLongDesc] =useState();
    const [imgList,setImgList] = useState([]);
    const [imgUrlList,setImgUrlList] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [checked, setChecked] = React.useState([0, 1,2,3,]);
    
    const [isUploaded,setUploaeded]=useState();
    const [isUploaded1,setUploaeded1]=useState();
   
    const roomId=router.query['id'];
  
    useEffect(() => {
        getProperty();
      }, []);
    const getProperty=async()=>{
         const db = getFirestore(app);
         const docRef=doc(db,'room',roomId.toString())
         
         try {
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
            const d=docSnap.data();
            setAddress(d['address'])
            setName(d['name'])
            setPrice(d['price'])
            setCurrency(d['currency'])
            setShortDesc(d['shortDes'])
            setLongDesc(d['longDes'])
            setImgUrlList(d['imgList'])
            setImage(d['img'])
            setAmenities(d['amenities'])
            
        } catch(error) {
            console.log(error)
        }
       
    }
    const upload = async (e) => {
      e.preventDefault()
      if (image !== null) {
        const storage = getStorage();
        const imageref = ref(storage, `images/${image.name + v4()}`);
        uploadBytes(imageref, image).then((snapshot) => {
          console.log("isdivb")
          setUploaeded(true)
          console.log(isUploaded)
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url)
            setImage(url);
          });
        });
      }
    }
    const handleSubmit=async(e)=>{
     
      console.log('0000000000000000000'+checked.includes(0));
      if(!checked.includes(0)){
        amenities.push('Tv');
      }
      if(!checked.includes(1)){
        amenities.push('WiFi');
      }
      if(!checked.includes(2)){
        amenities.push('Hot Water');
      }
      if(!checked.includes(3)){
        amenities.push('Pet Allowed');
      }
      e.preventDefault(
      );
      const promises = [];

  for (var i = 0; i < imgList.length; i++) {
    // files.values contains all the files objects
    const file = imgList[i];
    const storage = getStorage();
    const metadata = {
      contentType: "image/jpeg",
    };
    // const storageRef = ref(storage, "temp/" + docRef.id + "/" + file.name);

    // promises.push(uploadBytes(storageRef, file, metadata).then(uploadResult => {return getDownloadURL(uploadResult.ref)}))
    
  }
      console.log(amenities)

    console.log(imgUrlList)
    var resultInSeconds=floor(new Date().getTime() / 1000);
    const data={
      "id": Number  (resultInSeconds),
      "address":address.toString(),
      "amenities":amenities,
      "currency":currrency.toString(),
      "longDes":long.toString(),
      "price":Number(price),
      "name":name.toString(),
      "shortDes":short.toString(),
      "img":image.toString(), 
      "imgList":imgUrlList
    }
      const db = getFirestore(app);
    const docRef = doc(db,'room',roomId );
    await setDoc(docRef,data);
    if(docRef.id){
        alert("Added room Successfully!!");
        router.push("/Property")
      }
      
     
    console.log(docRef);
    }

    const handleToggle = value => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);

      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };

    const handleProfile = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            setImage(img);
        }
    };
    const handleImgList =(e)=>{
      var list = [];
     
      if (e.target.files && e.target.files[0]) {
        for(var i =0;i<e.target.files.length;i++){
          list.push(e.target.files[i]);
        }
        setImgList(list);
    }
    }
    const uploadMultiple=async(e)=>{
      e.preventDefault();
      const storage = getStorage();
      const urlList=[];
      for(var i =0;i<imgList.length;i++){
        if (image !== null) {
         
          const imageref = ref(storage, `images/${imgList[i].name + v4()}`);
          uploadBytes(imageref, imgList[i]).then((snapshot) => {
            console.log("isdivb")
            
            console.log(isUploaded)
            getDownloadURL(snapshot.ref).then((url) => {
              console.log(url)
              
              urlList.push(url.toString())
            });
          });
        }
      }
      setImgUrlList(urlList)
     
        setUploaeded1(true)
      
    }
  
    const handleCancel=(e)=>{
        e.preventDefault();
        router.push("/Property");
      }
   
    return (
      <>
      <div className="bg-blueGray-400 justify-center flex h-full">
      
      <div className="w-1/2 mt-[5rem] mb-[5rem] ">
      <br></br>
       
        
          {/* address currrency img(upload) long desc shot desc name price */}
            <div className=" bg-white rounded  ">
              <form action="#" method="POST">
                <div className="  justify-center flex">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Add Properties</h3>
                 </div>
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                          type="text"
                          name="property-name"
                          value={name}
                          id="first-name"
                          onChange={e=>setName(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                           Address
                        </label>
                        <input
                          type="text"
                          value={address}
                          name="street-address"
                          id="street-address"
                          onChange={e=>setAddress(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                     
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                           Currenecy
                        </label>
                        <input
                          type="text"
                          name="currency"
                          value={currrency}
                          id="currency"
                          onChange={e=>setCurrency(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                           Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          value={price}
                          id="price"
                          onChange={e=>setPrice(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                     
  
                    
                      <div className="col-span-7">
                        <label htmlFor="profile" className="block text-sm font-medium text-gray-700">
                          Image
                        </label>
               
                        <input
                        accept="image/png, image/gif, image/jpeg" 
                          type="file"

                          
                          onChange={handleProfile}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
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

                      <div className="col-span-7">
                        <label htmlFor="profile" className="block text-sm font-medium text-gray-700">
                          Multiple Image
                        </label>
               
                        <input
                        accept="image/png, image/gif, image/jpeg" 
                          type="file"
                         
                          multiple
                          onChange={handleImgList}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <div className={isUploaded1?"visible":"invisible"}>
                    <div  className="fas fa-check fa-book mr-2 text-l text-green-300"/>
                  
                    </div>
                    <div className={isUploaded1?"invisible":"visible"}>
                    <button
                  type="button"
                  
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={uploadMultiple}
                >
                  Upload Multiple
                </button>
                    </div>
                      </div>


                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                           Short Description
                        </label>
                        <input
                          type="text"
                          name="short-description"
                          value={short}
                          id="short-desc"
                          onChange={e=>setShortDesc(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                           Long Description
                        </label>
                        <textarea
                          name="long-desc"
                          id="long-desc"
                          value={long}
                          rows="4"
                          onChange={e=>setLongDesc(e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <br></br>
                      {/* tv wifi hotwater pet allowed */}
                      <fieldset>
                    <legend className="sr-only">Amenities</legend>
                    <div className="text-base font-medium text-gray-900" aria-hidden="true">
                    Amenities
                    </div>
                    <div className="space-y-4 flex">
                   
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="tv"
                            name="Amenities"
                            value="tv"
                            type="checkbox"
                            tabIndex={-1}
                            onClick={() => handleToggle(0)} 
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 mr-3 text-sm">
                          <label htmlFor="tv" className="font-medium text-gray-700">
                            TV
                          </label>
                            </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="wifi"
                            name="Amenities"
                            value="wifi"
                            type="checkbox"
                            tabIndex={0}
                            onClick={() => handleToggle(1)} 
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3  mr-3 text-sm">
                          <label htmlFor="wifi" className="font-medium text-gray-700">
                            WiFi
                          </label>
                            </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="hot-water"
                            name="Amenities"
                            value="hot water"
                            type="checkbox"
                            tabIndex={1}
                            onClick={() => handleToggle(2)} 
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3   mr-3 text-sm">
                          <label htmlFor="hot-water" className="font-medium text-gray-700">
                            Hot Water
                          </label>
                            </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="pet-allowed"
                            name="Amenities"
                            value="pet allwoed"
                            type="checkbox"
                            tabIndex={2}
                            onClick={() => handleToggle(3)} 
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3  mr-3 text-sm">
                          <label htmlFor="pet-allowed" className="font-medium text-gray-700">
                            Pet allowed
                          </label>
                            </div>
                      </div>
                     
                    </div>
                  </fieldset>
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