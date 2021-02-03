import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardSala from "../components/cardSala";
import Nav from "../components/nav";

export default function Salas() {
  return (
    <div className="bg-lava">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen h-full flex items-center my-auto justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50">
        <Nav />

        <div className="holder mt-8 mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* <Link href="/"> */}
          <a
            className="grid mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative hover:bg-gray-200"
            href="#"
            style={{minHeight: "200px"}}
          >
            <div className="m-4 grid place-items-center text-gray-500 dark:text-gray-300 text-xl border-4 border-gray-300 border-dashed">
              <div className="grid place-items-center">
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Criar Sala
              </div>
            </div>
          </a>
          {/* </Link> */}

          <CardSala />
        </div>
      </div>
    </div>
  );
}
