import React from "react";
import Header from "./Header";
import { useStateValue } from "../Context/StateProvider";
import Footer from "./Footer";
const UserProfile = () => {
const [{ user }, dispatch] = useStateValue();
return (
<div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
  <Header />
  User Profile
  

  <div>
    <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-32 mb-6">
      <div className="sm:flex xl:block sm:space-x-4 xl:space-x-0">
          <img className="mb-2 w-20 h-20 rounded-2xl shadow-lg shadow-gray-300" src={`${user?.user.imageURL}`}
          alt="profile"/>
        <div className="w-64">
          <h2 className="text-xl font-bold text-violet-600">{user?.user.name}</h2>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center text-sm font-normal text-gray-500">
              <svg className="mr-2 w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
                <path
                  d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                </path>
              </svg>
              Role - {user?.user.role}
            </li>
            <li className="flex items-center text-sm font-normal text-gray-500">
              <svg className="mr-2 w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"></path>
              </svg>
              Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-4 sm:flex xl:block">
        <div className="sm:flex-1">
          <address className="text-sm not-italic font-normal text-gray-500">
            <div className="mt-4">Email adress</div>
            <a className="text-sm font-medium text-gray-900" href="mailto:webmaster@flowbite.com">{user?.user.email}</a>
            
          </address>
        </div>
      </div>
   
    </div>
    </div>
    <Footer/>
</div>
);
};

export default UserProfile;