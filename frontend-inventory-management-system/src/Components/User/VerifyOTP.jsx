import React from "react";
import ReactCodeInput from "react-code-input";
const VerifyOTP = () => {
  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "45px",
    borderRadius: "3px",
    height: "45px",
    fontSize: "32px",
    border: "1px solid lightskyblue",
    boxSizing: "border-box",
    color: "black",
    backgroundColor: "white",
    borderColor: "lightgrey",
  };
  return (
    <div>
      <div className="grid min-h-screen place-items-center bg-slate-100">
        <div className="w-11/12 p-12 bg-white drop-shadow-2xl rounded-lg sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            <span className="font-medium">OTP Verification</span>
          </h1>
          <form className="mt-6">
            <label
              for="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <ReactCodeInput
              // onChange={(value) => SetOTP(value)}
              inputStyle={defaultInputStyle}
              fields={6}
            />

            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-600 shadow-lg focus:outline-none hover:bg-purple-700 hover:shadow-none"
            >
              Submit OTP
            </button>
          </form>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default VerifyOTP;
