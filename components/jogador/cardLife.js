import { useState } from "react";

export default function CardLife({nome, valor}) {
  const [num, setNum] = useState(valor);
  return (
    <div className="col-span-6 sm:col-span-6 lg:col-span-3">
      <div className="relative h-40 w-full">
        <div className="card bg-blue-900 shadow-lg inline-block w-full h-40 absolute bottom-0 transform rotate-12" />
        <div className="card bg-white transition shadow-xl w-full h-40 rounded-3xl absolute bottom-0 z-10 grid place-items-center">
          <div className="card bg-white h-4/5 sm:w-3/4 overflow-hidden relative grid">
            <h1 className="shadow-md text-xl font-thin text-center text-gray-600 uppercase p-3">
              {nome}
            </h1>
            <div className="flex justify-between">
              <button
                onClick={() => setNum(num - 1)}
                className="w-10 text-gray-600 hover:text-gray-500 hover:bg-gray-100 rounded-l cursor-pointer outline-none"
              >
                <span className=" text-2xl font-thin">-</span>
              </button>
              <div className="text-xl place-self-center font-thin text-center text-gray-600 uppercase p-4">
                {num}
              </div>
              <button
                onClick={() => setNum(num + 1)}
                className="w-10 text-gray-600 hover:text-gray-500 hover:bg-gray-100 rounded-l cursor-pointer outline-none"
              >
                <span className=" text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
