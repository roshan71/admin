import React, { useState } from 'react';
import firebase from 'firebase';
export default function Properties() {
    const [name, setName] = useState();

    const [address, setAddress] = useState();
    const [currrency, setCurrency] = useState();
    const [image,setImage] =useState();
    const [price,setPrice] =useState();
    const [short,setShortDesc] =useState();
    const [long,setLongDesc] =useState();
    const [imgList,setImgList] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [checked, setChecked] = React.useState([0, 1,2,3,]);
    

    
    const handleSubmit=(e)=>{
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
    const storage = firebase.getStorage();
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, "temp/" + docRef.id + "/" + file.name);

    promises.push(uploadBytes(storageRef, file, metadata).then(uploadResult => {return getDownloadURL(uploadResult.ref)}))
    
  }
      console.log(amenities)
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
                          type="text"
                          name="price"
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
                      </div>


                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                           Short Description
                        </label>
                        <input
                          type="text"
                          name="short-description"
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