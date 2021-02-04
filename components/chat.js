export default function Chat() {
  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col bg-white sm:rounded-lg h-auto">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col leading-tight">
          <div className="text-2xl mt-1 flex items-center">
            <span className="text-gray-700 mr-3">Chat Global</span>
            <span className="text-green-500">
              <svg width={10} height={10}>
                <circle cx={5} cy={5} r={5} fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div
        id="messages"
        className="flex flex-col h-72 space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Nossa, o que foi Rick?
                </span>
                <span className="text-gray-400 block">
                  <span className="text-gray-800 font-bold mr-1">Morty </span>11/08/2021 - 11:20h
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  É o carburador quântico?
                </span>
                <span className="text-gray-400 block">
                  <span className="text-gray-800 font-bold mr-1">Morty </span>11/08/2021 - 11:20h
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  Carburador quântico?
                </span>
                <span className="text-gray-400 flex items-end justify-end block">
                    <span className="text-gray-800 font-bold mr-1">Você</span>11/08/2021 - 11:20h
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  nossa, morty.
                </span>
                <span className="text-gray-400 flex items-end justify-end block">
                    <span className="text-gray-800 font-bold mr-1">Você</span>11/08/2021 - 11:20h
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  ?
                </span>
                <span className="text-gray-400 block">
                  <span className="text-gray-800 font-bold mr-1">Morty </span>11/08/2021 - 11:20h
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  você não pode juntar uma palavra de ficção cientifica...
                </span>
                <span className="text-gray-400 flex items-end justify-end block">
                    <span className="text-gray-800 font-bold mr-1">Você</span>11/08/2021 - 11:20h
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  e a outra de um carro e esperar que signifique alguma coisa
                </span>
                <span className="text-gray-400 flex items-end justify-end block">
                    <span className="text-gray-800 font-bold mr-1">Você</span>11/08/2021 - 11:20h
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Rick, não estou gostando do seu jeito..
                </span>
                <span className="text-gray-400 block">
                    <span className="text-gray-800 font-bold mr-1">Jerry Smith </span>11/08/2021 - 11:20h
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
                 Se eu te ofendi alguma vez, eu peço que melhore pra eu não precisar ofender de novo
                </span>
                <span className="text-gray-400 flex items-end justify-end block">
                    <span className="text-gray-800 font-bold mr-1">Você</span>11/08/2021 - 11:20h
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </span>
          <input
            type="text"
            placeholder="Envie uma mensagem..."
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
