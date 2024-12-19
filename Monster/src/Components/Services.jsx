import React from "react";

const Services = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <div className="mt-20">
          <img
            className="h-[550px]"
            src="https://canary.contestimg.wish.com/api/webimage/622285c65e5f9ec72809f46a-large.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="ml-5 shadow-black shadow-2xl w-60 h-52 justify-center items-center">
            <div className="justify-center items-center flex flex-col gap-8">
              <div>
                <h1 className="text-2xl mt-4">What We Offer</h1>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-blue-700 py-4 px-4 text-white hover:bg-black mt-8">
                  VIEW ALL SERVICES
                </button>
              </div>
            </div>
          </div>

          <div className="ml-5 shadow-black shadow-2xl w-60 h-52 justify-center items-center">
            <div className="justify-center items-center flex flex-col gap-8">
              <div>
                <h1 className="mt-4 text-2xl">Corporate Solutions</h1>
              </div>
              <div className="flex text-center mt-8">
                <p>
                  Need specific software for your company? We are ready to
                  develop it!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="ml-5 shadow-black shadow-2xl w-60 h-52 justify-center items-center">
            <div className="justify-center items-center flex flex-col gap-8">
              <div>
                <h1 className="mt-4 text-2xl">Call Centre Solutions</h1>
              </div>
              <div className="flex text-center mt-8">
                <p>
                  Our experts provide custom products of any complexity for call
                  centers.
                </p>
              </div>
            </div>
          </div>
          <div className="ml-5 shadow-black shadow-2xl w-60 h-52 justify-center items-center">
            <div className="justify-center items-center flex flex-col gap-8">
              <div>
                <h1 className="mt-4 text-2xl">Cloud Development</h1>
              </div>
              <div className="flex text-center mt-8">
                <p>
                  Our experts provide custom products of any complexity for call
                  centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
