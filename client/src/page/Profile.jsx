import React from "react";

const Profile = () => {
  return (
    <>
      <div className=" h-auto flex justify-center items-center  my-5">
        <div className=" pb-8 shadow-xl shadow-btn-color md:w-2/4 lg:w-2/4 xl:w-2/4 w-4/5 md:h-3/5 lg:h-3/5 xl:h-3/5 h-1/4 rounded-lg bg-card-color">
         
         {/* heading edit and personal details */}
          <div className="flex justify-between m-4 ">
          <h3 className="font-semibold underline underline-offset-8 ">
            Profile details
          </h3>
          <h3 className=" font-semibold cursor-pointer hover:underline">
            edit
          </h3>
          </div>


            {/* profile picture and name */}


          <div className="flex flex-col items-center my-4">
          <div className="w-32  md:h-32 lg:h-32 bg-cover bg-center rounded-md ">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
              alt
              className="cursor-pointer h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
            />
          </div>
          <h1 className="lg:text-2xl xl:text-2xl 2xl:text-2xl sm:text-xl text-lg font-bold my-3">Jyotiraditya mishra</h1>
          </div>
        {/* peronal details heading */}
          <div className="flex items-center justify-center">
            <h2 className="font-semibold text-line-color">Personal details</h2>
            <div className="w-3/5 h-0.5 bg-line-color"></div>
          </div>

          {/* peronal details */}

          <div className="flex justify-around my-2">
          <div>
            <h2 className="text-line-color py-1">Mobile No</h2>
            <h2 className="text-line-color py-1">Email Id</h2>
            <h2 className="text-line-color py-1 ">Living/city/<br/>village</h2>
          </div>
          <div>
          <h2 className="text-black py-1">89898989898</h2>
            <h2 className="text-black py-1">asdjj@gmail.com</h2>
            <h2 className="text-black py-1">kolkata</h2>
          </div>

          </div>
           {/* professional details heading */}
           <div className="flex items-center justify-center">
            <h2 className="font-semibold text-line-color">Academic details</h2>
            <div className="w-3/5 h-0.5 bg-line-color"></div>
          </div>

           {/* professional details */}

           <div className="flex justify-around my-2">
          <div>
            <h2 className="text-line-color py-1">Class</h2>
            <h2 className="text-line-color py-1">Board</h2>
            <h2 className="text-line-color py-1">Exam</h2>
          </div>
          <div>
          <h2 className="text-black py-1">b.tech</h2>
            <h2 className="text-black py-1">cbse</h2>
            <h2 className="text-black py-1">GATE</h2>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
