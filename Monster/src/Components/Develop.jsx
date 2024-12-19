import React from "react";

const Develop = () => {
  return (
    <>
      <div className="flex bg-blue-600 justify-around mt-20">
        <div>
          <img
            className="h-60 justify-center items-center flex mt-10"
            src="https://img.freepik.com/free-vector/colorful-workspace-background_23-2147692295.jpg"
            alt=""
          />
        </div>
        <div className=" h-72 text-white justify-center items-center text-center flex-col mt-10">
          <h1 className="text-5xl">Let's Develop Your Next Great App!</h1>
          <p className="mt-6">
            Do you need a unique software solution for your company? We know how
            to help you!
          </p>
        </div>
        <div className="flex gap-5 ">
          <button className="text-white px-4 bg-blue-800 my-36 hover:bg-black">
            Get In Touch
          </button>
          <button className="hover:bg-white my-36 px-4">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Develop;
