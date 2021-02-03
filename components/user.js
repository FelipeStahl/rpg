import { useEffect, useRef, useState } from "react";

export default function User() {
  const [menuProfile, setMenuProfile] = useState("hidden");
  const container = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if(!container.current)
        return;
      if (!container.current.contains(event.target)) {
        if (menuProfile === "hidden") return;
        setMenuProfile("hidden");
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [menuProfile, container]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (!menuProfile) return;

      if (event.key === "Escape") {
        setMenuProfile("hidden");
      }
    };

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [menuProfile]);
  return (
    <div className="ml-3 relative">
      <div>
        <button
          className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          id="user-menu"
          aria-haspopup="true"
          onClick={() => setMenuProfile("block")}
        >
          <span className="sr-only">Abrir menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://cdn.pixabay.com/photo/2017/02/16/19/26/star-wars-2072171_960_720.jpg"
            alt="usuario"
          />
        </button>
      </div>
      {/*
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          */}
      <div
        className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${menuProfile}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
        ref={container}
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Sua conta
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Configurações
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Sair
        </a>
      </div>
    </div>
  );
}
