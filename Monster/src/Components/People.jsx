import React from "react";

const People = () => {
  return (
    <>
      <div className="">
        <div className="">
          <h1 className="flex text-3xl justify-center">What people Say</h1>
        </div>
        <div className="flex gap-4 mt-14">
          <div>
            <article className=" text-center border-2 border-slate-300 ml-4 h-60 flex flex-col justify-center">
              <div className="flex justify-start items-start px-6 gap-4">
                <div>
                  <img
                    className="rounded-full w-14 h-14"
                    src="https://www.shutterstock.com/image-photo/beautiful-business-lady-classic-suit-260nw-465881846.jpg"
                  />
                </div>
                <div className="text-start">
                  <h1 className="text-2xl justify-start ">
                    Catherine Williams
                  </h1>
                  <h3 className="text-blue-800">Regular Client</h3>
                </div>
              </div>
              <div className="mt-5">
                <p>
                  RatherApp offers a high caliber of resources skilled in
                  Microsoft Azure .NET, mobile and Quality Assurance. They
                  became our true business partners over the past three years.
                </p>
              </div>
            </article>
          </div>
          <div>
            <article className=" text-center border-2 border-slate-300 h-60 flex flex-col justify-center">
              <div className="flex justify-start items-start px-6 gap-4">
                <div>
                  <img
                    className="rounded-full w-14 h-14"
                    src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg"
                  />
                </div>
                <div className="text-start">
                  <h1 className="text-2xl justify-start ">
                    Catherine Williams
                  </h1>
                  <h3 className="text-blue-800">Regular Client</h3>
                </div>
              </div>
              <div className="mt-5">
                <p>
                  RatherApp offers a high caliber of resources skilled in
                  Microsoft Azure .NET, mobile and Quality Assurance. They
                  became our true business partners over the past three years.
                </p>
              </div>
            </article>
          </div>
          <div>
            <article className=" text-center border-2 border-slate-300 mr-4 h-60 flex flex-col justify-center">
              <div className="flex justify-start items-start px-6 gap-4">
                <div>
                  <img
                    className="rounded-full w-14 h-14"
                    src="https://hr-gazette.com/wp-content/uploads/2018/10/bigstock-196164373.jpg"
                  />
                </div>
                <div className="text-start">
                  <h1 className="text-2xl justify-start ">
                    Catherine Williams
                  </h1>
                  <h3 className="text-blue-800">Regular Client</h3>
                </div>
              </div>
              <div className="mt-5">
                <p>
                  RatherApp offers a high caliber of resources skilled in
                  Microsoft Azure .NET, mobile and Quality Assurance. They
                  became our true business partners over the past three years.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
