import React, { useEffect, useState } from "react";

function ModelApp({ id, removeModel }) {
  return (
    <div className="w-72">
      <p className="text-[#333333] font-bold text-xl mb-2">Model #{id}</p>
      <div className="flex flex-col items-center border-solid border-2 border-[#333333] rounded-md p-7 indicator w-auto">
        <img
          className="indicator-item w-6 hover:scale-[1.1]"
          src="assets/close-icon.svg"
          alt=""
          onClick={removeModel}
        />
        <div className="mb-5">
          <select className="select select-bordered w-full max-w-xs border-[#383838] bg-transparent text-[#383838]">
            <option className="bg-grey-200">
              bert-large-uncased-whole-word-masking-finetuned-squad
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Question?"
          className="input input-bordered input-md w-full max-w-xs mb-3 border-[#383838] bg-transparent text-[#383838] placeholder:text-[#383838]"
        />
        <textarea
          placeholder="Context"
          className="textarea textarea-bordered textarea-md w-full max-w-xs border-[#383838] bg-transparent text-[#383838] placeholder:text-[#383838]"
        ></textarea>

        <div className="flex flex-row mt-5">
          <p className="text-sm font-bold text-[#333333]">Answer: </p>
          <p className="text-sm w-full text-[#333333]">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit
          </p>
        </div>

        <button className="btn mt-5 border-[#383838] bg-transparent text-[#383838] hover:text-[#cca300]">
          {/* <span className="loading loading-spinner"></span> */}
          Process
        </button>
      </div>
    </div>
  );
}

export default ModelApp;
