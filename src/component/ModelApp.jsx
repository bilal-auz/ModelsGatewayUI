import React, { useState } from "react";
import axios from "axios";

import { models } from "../assets/available-models";

function ModelApp({ id, removeModel }) {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputContext, setInputContext] = useState("");
  const [inputQuestion, setInputQuestion] = useState("");
  const [QA_Model, setQA_Model] = useState("");
  const [error, setError] = useState(false);

  const handleProcess = async () => {
    setError(false); //remove the error sign
    setIsLoading(true);

    if (QA_Model === "") return setError(true);

    const target_model = models.find(
      (model) => model.id === QA_Model
    ).HuggingFace_Link;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },

        params: {
          context: inputContext,
          question: inputQuestion,
          model_name: target_model,
        },
      };

      const { data } = await axios.get(
        process.env.REACT_APP_API_ENDPOINT + "/model/huggingface/bert-large",
        config
      );

      setAnswer(data);
    } catch (error) {
      console.log("Error: " + error);
      setAnswer("Error: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadExample = () => {
    setInputQuestion("what is the abbreviation for Machine Learning?");
    setInputContext(
      "Machine learning (ML) is the scientific study of algorithms and statistical models that computer systems use to progressively improve their performance on a specific task. Machine learning algorithms build a mathematical model of sample data, known as 'training data', in order to make predictions or decisions without being explicitly programmed to perform the task. Machine learning algorithms are used in the applications of email filtering, detection of network intruders, and computer vision, where it is infeasible to develop an algorithm of specific instructions for performing the task. Machine learning is closely related to computational statistics, which focuses on making predictions using computers. The study of mathematical optimization delivers methods, theory, and application domains to the field of machine learning. Data mining is a field of study within machine learning and focuses on exploratory data analysis through unsupervised learning. In its application across business problems, machine learning is also referred to as predictive analytics."
    );
  };

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
          <select
            className={
              (error &&
                "select select-bordered w-full max-w-xs border-[#8f0709] bg-transparent text-[#383838]") ||
              "select select-bordered w-full max-w-xs border-[#383838] bg-transparent text-[#383838]"
            }
            value={QA_Model}
            onChange={(e) => setQA_Model(e.target.value)}
          >
            <option value={""} selected disabled hidden>
              Choose here
            </option>
            {models.map((model) => (
              <option
                className="bg-grey-200"
                value={model.id}
                disabled={model.available}
              >
                {model.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2 w-full flex flex-row justify-start">
          <button
            onClick={loadExample}
            className="btn btn-link btn-xs text-[#333333] italic underline-offset-1"
          >
            example...
          </button>
        </div>

        <input
          type="text"
          placeholder="Question?"
          className="input input-bordered input-md w-full max-w-xs mb-3 border-[#383838] bg-transparent text-[#383838] placeholder:text-[#383838]"
          value={inputQuestion}
          onChange={(e) => setInputQuestion(e.target.value)}
        />
        <textarea
          placeholder="Context"
          className="textarea textarea-bordered textarea-md leading-normal w-full max-w-xs border-[#383838] bg-transparent text-[#383838] placeholder:text-[#383838]"
          value={inputContext}
          onChange={(e) => setInputContext(e.target.value)}
        ></textarea>

        <div className="flex flex-row mt-5">
          <p className="text-sm font-bold text-[#333333]">Answer: </p>
          <p className="text-sm w-full text-[#333333] ml-2 italic">{answer}</p>
        </div>

        <button
          className="btn mt-5 border-[#383838] bg-transparent text-[#383838] hover:text-[#cca300]"
          onClick={handleProcess}
        >
          {(isLoading && <span className="loading loading-spinner"></span>) ||
            "Process"}
        </button>
      </div>
    </div>
  );
}

export default ModelApp;
