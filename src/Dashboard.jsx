import React, { useEffect, useState } from "react";
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
      <div className="flex flex-col items-center h-[40rem]">
        <div className="flex flex-row justify-center w-full max-w-md xl:max-w-7xl items-center px-8 py-4">
          <h1 className="text-[#333333] font-bold">QA Models Gateway</h1>
        </div>
        <div className="body flex flex-row mx-auto justify-around items-center w-full max-w-md xl:max-w-7xl px-8">
          {models.map(({ id }) => (
            <ModelApp key={id} id={id} removeModel={() => removeModel(id)} />
          ))}
          <img
            className="w-10"
            onClick={addModel}
            src="assets/add-icon.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
