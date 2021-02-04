import Head from "next/head";
import Nav from "../../components/jogador/nav";
import CardSkill from "../../components/jogador/cardSkill";
import CardLife from "../../components/jogador/cardLife";
import Talentos from "../../components/jogador/talentos";
import Pericias from "../../components/jogador/pericias";
import Armas from "../../components/jogador/armas";
import Inventario from "../../components/jogador/inventario";
import Modal from "../../components/modal";
import { useState } from "react";
import Personagem from "../../components/jogador/personagem";

export default function Sala() {
  const [showModal, setShowModal] = useState(false);
  function setModal(){
    setShowModal(false);
  }
  const armas = [
    {
      arma: "Pistola Blaster",
      pericia: "Combate leve",
      dano: 7,
      critico: 3,
      alcance: "Média",
      especial: "Atordoador",
    },
    {
      arma: "Rifle Blaster",
      pericia: "Combate Pesado",
      dano: 10,
      critico: 3,
      alcance: "Longo",
      especial: "Atordoador",
    },
  ];

  const pericias = [
    {
      nome: "Artimanha",
      nivel: "ast",
      carreira: false,
      graduacao: 2,
    },
    {
      nome: "Astronavegação",
      nivel: "int",
      carreira: false,
      graduacao: 1,
    },
    {
      nome: "Atletismo",
      nivel: "for",
      carreira: true,
      graduacao: 3,
    },
    {
      nome: "Charme",
      nivel: "por",
      carreira: false,
      graduacao: 1,
    },
  ];

  const talentos = [
    {
      nome: "Endurecido",
      página: "#",
      descricao: "+2 de ferimentos",
    },
    {
      nome: "Intimidador",
      página: "#",
      descricao: "Gastar stress / vantagem intimidador",
    },
    {
      nome: "Improvido",
      página: "#",
      descricao: "Aprimoramento em armadura",
    },
    {
      nome: "Cartucho sobre",
      página: "#",
      descricao: "Sobre?",
    },
  ];
  return (
    <div className="bg-lava">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen h-full flex items-center my-auto justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50">
        <Nav />
        <div className="grid mt-8">
          <div className="col-12 bg-gray-100  text-gray-800 bg-opacity-60" id="nivel">
            <div className="p-4">
              <div className="grid grid-cols-1">
                <Personagem/>
              </div>
            </div>
          </div>

          <div className="col-12 mt-4 bg-gray-100  text-gray-800 bg-opacity-60" id="nivel">
            <div className="p-4">
              <div className="grid grid-cols-12 gap-4">
                <CardLife nome="Resistência" valor={1} />
                <CardLife nome="Ferimentos" valor={1} />
                <CardLife nome="Fadíga" valor={1} />
                <CardLife nome="Defesa" valor={1} />
              </div>
            </div>
          </div>

          <div
            className="col-12 mt-4 bg-gray-100  text-gray-800  bg-opacity-50"
            id="caracteristica"
          >
            <div className="card bg-gray-700 inline-block w-full h-6 text-white text-center">
              Características
            </div>
            <div className="ml-4 mr-4 mb-4 mt-2">
              <div className="grid grid-cols-12 gap-4">
                <CardSkill nome="Força Física" valor={1} />
                <CardSkill nome="Agilidade" valor={1} />
                <CardSkill nome="Intelecto" valor={1} />
                <CardSkill nome="Astúcia" valor={1} />
                <CardSkill nome="Força de Vontade" valor={1} />
                <CardSkill nome="Porte" valor={1} />
              </div>
            </div>
          </div>

          <div
            className="mt-4 bg-gray-100 text-gray-800 bg-opacity-60"
            id="pericia"
          >
            <div className="card bg-gray-700 inline-block w-full h-6 text-white text-center">
              Perícias
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-4">
                <Pericias dados={pericias} campo="Perícias Gerais" />
              </div>
              <div className="p-4">
                <Pericias dados={pericias} campo="Perícias de Combate" />
                <div className="mt-4">
                  <Pericias dados={pericias} campo="Perícias de Campo" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 mt-4 bg-gray-100  text-gray-800  bg-opacity-50"
            id="arma"
          >
            <div className="card bg-gray-700 inline-block w-full h-6 text-white text-center">
              Armas
            </div>
            <div className="p-4">
              <Armas dados={armas} />
            </div>
          </div>
          <div
            className="col-12 mt-4 bg-gray-100  text-gray-800  bg-opacity-50"
            id="arma"
          >
            <div className="card bg-gray-700 inline-block w-full h-6 text-white text-center">
              Talentos e habilidades especiais
            </div>
            <div className="p-4">
              <Talentos dados={talentos} />
            </div>
          </div>
          <div
            className="col-12 mt-4 bg-gray-100  text-gray-800  bg-opacity-50"
            id="inventario"
          >
            <div className="text-right mr-14">
            <button
              type="button"
              className="absolute mt-1 rounded-full border border-transparent px-5 py-3 bg-yellow-500 font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700"
              onClick={()=> setShowModal(true)}
            >
              +
            </button>
            </div>
            <div className="card bg-gray-700 inline-block w-full h-6 text-white text-center">
              Inventário
            </div>
            <div className="p-4">
              <Inventario dados={talentos}/>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} set={setModal}/>
    </div>
  );
}
