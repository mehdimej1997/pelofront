import React from "react";

function Form() {
  return (
    <div className="w-1/2 m-auto my-12">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="font-inter font-semibold">Nom:</label>
          <input
            type="text"
            name="user_name"
            className="py-2 rounded-lg font-inter font-bold text-neutral-800 px-2"
            placeholder="Insert your name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-inter font-semibold">Email:</label>
          <input
            type="email"
            name="user_email"
            className="py-2 rounded-lg font-inter font-bold text-neutral-800 px-2"
            placeholder="Insert your Email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-inter font-semibold">Message:</label>
          <textarea
            name="message"
            className="py-2 rounded-lg font-inter font-bold text-neutral-800 px-2"
            placeholder="Insert your message"
            required
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-neutral-200 text-neutral-800 font-inter font-bold px-10 py-4 rounded-lg hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-300"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
