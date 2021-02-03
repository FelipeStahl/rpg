import Head from "next/head";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Link from "next/link"

export default function Home() {
  

  return (
    <div className="bg-lava">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex items-center my-auto justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50">
        <Nav />

        <div className="text-center">
          <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
            <span className="block">GERADOR</span>
            <span className="block text-red-600 mt-2">RPG Online</span>
          </h1>
          <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Link href="/salas">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 md:text-lg md:px-10"
                >
                  Entrar em uma sala
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Criar uma sala
              </a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
