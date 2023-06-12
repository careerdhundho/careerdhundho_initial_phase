import React from "react";

const Searchbox = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="w-11/12 h-60  rounded-2xl relative  bg-gradient-to-tr from-top-banner to-card-color-500">
          <img
            src="top-header.png"
            className="w-screen h-full bg-cover rounded-2xl absolute mix-blend-overlay"
            alt=""
          />

          <div className="flex justify-center p-10">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative hover:shadow-2xl shadow-card-color">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full h-10 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbox;
