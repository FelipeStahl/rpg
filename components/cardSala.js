import Link from "next/link";

export default function CardSala() {
  return (
    <Link href="/sala">
      <a
        className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative"
        href="#"
      >
        <img
          className="w-full"
          src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg"
          alt
        />
        <div className="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
          Offline
        </div>
        <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
          <span className="mr-1 p-1 px-2 font-bold">3 Jogadores</span>
          <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            2 níveis
          </span>
          <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            1 partida
          </span>
        </div>
        <div className="desc p-4 text-gray-800">
          <div
            target="_new"
            className="title font-bold block cursor-pointer hover:underline"
          >
            Nome da Sala
          </div>
          <a
            className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
          >
            @autor
          </a>
          <span className="description text-sm block py-2 border-gray-400 mb-2">
            Descrição do jogo!
          </span>
        </div>
      </a>
    </Link>
  );
}
