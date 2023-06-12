import React from "react";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <img
              onClick={() => {
                navigate("/home");
              }}
              src="logo2.0.png"
              class="h-8 md:h-16 lg:h-16 pointer"
              alt="careerdhundho logo"
            />
            <span
              onClick={() => {
                navigate("/home");
              }}
              class="self-center text-lg md:text-16 lg:text-16 font-semibold whitespace-nowrap dark:text-white pointer"
            >
              Careerdhundho
            </span>
          </a>

          <div className="flex mr-8 items-center">
            <button
              onClick={() => {
                navigate("/signup");
              }}
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Sign-up
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Log-in
            </button>
            <div className="w-12 h-12 bg-cover bg-center rounded-md">
              <img
                onClick={() => {
                  navigate("/profile");
                }}
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                alt
                className="cursor-pointer h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
