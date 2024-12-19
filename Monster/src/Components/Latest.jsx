import React from "react";

const Latest = () => {
  return (
    <>
      <div className="w-full flex-col gap-6 flex justify-center items-center">
        <div className="flex items-center justify-center flex-col w-72 text-center">
          <h1 className="text-3xl">Latest Projects</h1>
          <p className="mt-4">
            In our portfolio, you can browse the latest products developed for
            our clients for different corporate purposes. Our qualified team of
            interface designers and software developers is always ready to
            create something unique for you.
          </p>
        </div>
        <div className="flex gap-4 text-lg text-slate-400 ">
          <span className="cursor-pointer text-blue-700">ALL </span>
          <span className="cursor-pointer hover:text-blue-700">
            MOBILE APPS
          </span>
          <span className="cursor-pointer hover:text-blue-700">
            CUSTOM SOFTWARE
          </span>
          <span className="cursor-pointer hover:text-blue-700">
            QA & TESTING
          </span>
          <span className="cursor-pointer hover:text-blue-700">
            UX AND DESIGN
          </span>
        </div>
      </div>
    </>
  );
};

export default Latest;
