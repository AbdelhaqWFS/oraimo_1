import React from "react";
import flogo from "./images/flogo.png";
import { GoMail } from "react-icons/go";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { RiFacebookFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#323232] flex  gap-24 justify-center py-16">
        <div className="text-white">
          <h1 className="font-bold text-2xl text-[#82E602] my-2">Bulletin:::</h1>
          <p>Recevez les dernières nouvelles et cadeaux oraimo</p>
          <form className="py-5">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <GoMail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                class="block w-full p-4 pl-10 text-sm bg-[#323232] border border-gray-400  rounded-3xl text-white  w-[300px] h-[45px]  "
                placeholder="Saissisez votre email"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                <button className="bg-[#646464] rounded-3xl pl-2 font-bold text-white w-[100px] h-[40px]">
                  Inscription
                </button>
              </div>
            </div>
          </form>
          <p className="my-2 text-sm">Horaires : Du lundi au vendredi: de 9h00 à 18h00</p>
          <p className="my-2 text-sm">
          Service client: 0623 040 100
          </p>
          <p className="my-2 text-sm">E-mail: care.ma@oraimo.com</p>
          <div className="flex gap-2 mt-4">
            <ImInstagram className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
            <RiFacebookFill className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
            <AiOutlineTwitter className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-2xl text-[#82E602] my-2">À propos d'oraimo:::</h1>
          <p className="my-2 text-sm">À propos de nous</p>
          <p className="my-2 text-sm">Où acheter</p>
          <p className="my-2 text-sm">Offre spéciale</p>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-2xl text-[#82E602] my-2">Conditions:::</h1>
          <p className="my-2 text-sm">Garantie</p>
          <p className="my-2 text-sm">Commande & expédition</p>
          <p className="my-2 text-sm">Retour & Remboursement</p>
          <p className="my-2 text-sm">Termes & Conditions</p>
          <p className="my-2 text-sm">Politique de confidentialité</p>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-2xl text-[#82E602] my-2">Obtenir de l'aide:::</h1>
          <p className="my-2 text-sm">Visitez Calcare</p>
          <p className="my-2 text-sm">Nous contacter</p>
        </div>
      </div>
      <div className="bg-black flex py-4 flex-col items-center justify-center text-white">
        <img src={flogo} alt="logo" />
        <p className="text-sm text-[#646464] py-4">
        © 2013-2023 oraimo Copyright. oraimo Technology (HK) Ltd        </p>
      </div>
    </div>
  );
};

export default Footer;
