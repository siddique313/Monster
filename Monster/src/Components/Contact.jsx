import React, { useState } from "react";

const Contact = () => {
  const [yourName, setYourName] = useState("");
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  return (
    <>
      <div className="">
        <div className="flex flex-col w-full px-44">
          <div className="flex items-center gap-10 justify-center w-full    ">
            <h1 className="text-2xl">Get In Touch</h1>
            <h1 className="text-slate-400">|</h1>
            <h3>
              If you have any questions, just fill in the contact form, and we
              will answer you shortly.
            </h3>
          </div>
          <div className="flex justify-center items-center w-full">
            <form className="flex gap-6 mt-10 w-full items-center justify-center text-center">
              <input
                className="h-10 bg-slate-200 text-black placeholder:text-slate-600 w-full pl-4"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="h-10 bg-slate-200 text-black placeholder:text-slate-600 w-full pl-4"
                type="text"
                placeholder="E-mail"
              />
              <input
                className="h-10 bg-slate-200 text-black placeholder:text-slate-600 w-full pl-4"
                type="text"
                placeholder="Phone"
              />
            </form>
          </div>
          <div className="flex items-center justify-center mt-4 w-full">
            <form className="w-full" action="">
              <textarea
                className="h-10 flex bg-slate-200 justify-center items-center text-black   placeholder:text-slate-600 w-full min-h-60 pl-4"
                type="text"
                placeholder="Message"
              />
            </form>
          </div>
          <div className="mt-6 flex justify-start">
            <button className="bg-blue-500 py-2 px-5 text-white hover:bg-white hover:text-black hover:duration-500 hover:border-black hover:border-[1px]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
