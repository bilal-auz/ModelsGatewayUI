import React, { useState } from "react";
import ModelApp from "./component/ModelApp";

function Dashboard() {
  const [models, setModels] = useState([{ id: 1 }]);
  const [counterId, setCounterId] = useState(1);

  const addModel = () => {
    const newModel = { id: counterId + 1 };

    setCounterId(counterId + 1);

    setModels([...models, newModel]);
  };

  const removeModel = (id) => {
    setModels((prevModels) => prevModels.filter((model) => model.id !== id));
  };

  return (
    <div className="w-[calc(100%-2rem)] max-w-[85rem] rounded-md bg-[#cca300]">
      <div className="flex flex-col items-center justify-between h-fit min-h-[40rem] p-2">
        <div className="flex flex-row justify-center w-full max-w-md xl:max-w-7xl items-center px-8 py-4 mb-2">
          <h1 className="text-[#333333] font-bold">QA Models Gateway</h1>
        </div>
        <div className="body flex flex-row mx-auto justify-around items-start h-full w-full xl:max-w-7xl px-8 mb-5">
          {models.map(({ id }) => (
            <ModelApp key={id} id={id} removeModel={() => removeModel(id)} />
          ))}
          {models.length < 2 && (
            <div className="flex flex-row h-full justify-center">
              <img
                className="w-10"
                onClick={addModel}
                src="assets/add-icon.svg"
                alt=""
              />
            </div>
          )}
        </div>
        <div
          role="alert"
          class="alert alert-info w-fit bg-[#cca300] border-none p-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-current shrink-0 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="text-sm">
            Delays possible as model loads for the first time.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
