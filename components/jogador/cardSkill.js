import { useState } from "react";

export default function CardSkill({nome, valor}) {
  const [num, setNum] = useState(valor);
  
  return (
    <div className="col-span-6 sm:col-span-4 lg:col-span-2">
      <div className="card rounded-full bg-white shadow-sm p-4">
        <div className="grid grid-cols-1 justify-center">
          <div className="justify-self-center text-sm">
            <div
              className="inline-block rounded-full text-white 
                      bg-blue-900
                      text-xs font-bold 
                      mb-2 px-2 md:px-4 py-1 "
            >
              {nome}
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => setNum(num - 1)}
              className="w-10 text-gray-600 hover:text-gray-500 hover:bg-gray-100 rounded-l cursor-pointer outline-none"
            >
              <span className="text-3xl font-thin">−</span>
            </button>
            <div className="rounded-full p-1 bg-gradient-to-r from-red-600 via-purple-800 to-blue-900">
              <div className="grid justify-items-stretch rounded-full bg-white overflow-hidden h-16 w-16">
                <div className="place-self-center">{num}</div>
              </div>
            </div>

            <button
              onClick={() => setNum(num + 1)}
              className="w-10 text-gray-600 hover:text-gray-500 hover:bg-gray-100 rounded-l cursor-pointer outline-none"
            >
              <span className=" text-2xl font-thin">+</span>
            </button>
          </div>

          <span className="text-red-500 text-center">▲ 1</span>
        </div>
      </div>
      {/* <div className="flex flex-row bg-white shadow-sm rounded p-4">
        <div className="flex flex-col flex-grow">
          <div className="text-sm text-center text-gray-500">
            <div className="col-span-12 lg:col-span-8">
              <a
                href="#"
                className="inline-block rounded-full text-white 
                      bg-blue-900
                      text-xs font-bold 
                      mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 "
              >
                Força Física
              </a>
            </div>
          </div>
          <div className="flex ml-4 mr-4">
            <button
              data-action="decrement"
              className="w-10 text-gray-600 hover:text-gray-500 hover:bg-gray-100 rounded-l cursor-pointer outline-none"
            >
              <span className="text-3xl font-thin">−</span>
            </button>
            <div className="rounded-full p-1 bg-gradient-to-r from-red-600 via-purple-800 to-blue-900">
              <div className="grid justify-items-stretch rounded-full bg-white overflow-hidden h-16 w-16">
                <div className="place-self-center">1</div>
              </div>
            </div>

            <button
              data-action="increment"
              className="w-10 text-gray-600 hover:text-gray-500 hover:bg-gray-100 rounded-l cursor-pointer outline-none"
            >
              <span className=" text-2xl font-thin">+</span>
            </button>
          </div>

          <span className="text-red-500 text-center">▲ 1</span>
        </div>
      </div> */}
    </div>
  );
}
