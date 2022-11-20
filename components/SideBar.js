import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-blueGray-800 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col  md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */} 
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
         
          {/* User */}
         
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-700">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                  
                      Notus NextJS
                  
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
          
            {/* Divider */}
           
            {/* Heading */}
            <h6 className="md:min-w-full text-white text-l uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="../">
                  <div
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                     "text-lightBlue-500 hover:text-lightBlue-600"
                       
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                       
                           "text-blueGray-300"
                      }
                    ></i>{" "}
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/dashboard">
                <div
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                     "text-lightBlue-500 hover:text-lightBlue-600"
                       
                    }
                  >
                    <i
                      className={
                        "fas fa-eye mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    View Request
              </div>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/User">
                <div
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                     "text-lightBlue-500 hover:text-lightBlue-600"
                       
                    }
                  >
                    <i
                      className={
                        "fas fa-user mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    User
              </div>
                </Link>
              </li>
              
            </ul>

                     </div>
        </div>
      </nav>
    </>
  );
}
