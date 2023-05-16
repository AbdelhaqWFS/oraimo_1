import React from "react";
import oraimo from "./images/oraimo.png";
import { BsCart } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import carlcare from "./images/carlcare.png";
import deliverytohome from "./images/deliverytohome.png";
import product1 from "./images/product1.jpeg";
import product2 from "./images/product2.jpeg";
import product3 from "./images/product3.jpeg";
import product4 from "./images/product4.jpeg";
import { Link, useNavigate } from "react-router-dom";

const AfterNavbar = () => {
  const goto = useNavigate();
  return (
    <>
      <div className="flex justify-center gap-12 my-8">
        <img src={oraimo} alt="oraimo" className="h-[90px]" />
        <Link
          className="py-8 font-bold text-gray-600 hover:text-[#82E602] cursor-pointer "
          to="/"
        >
          Accueil
        </Link>
        <Link
          className="py-8 text-[15.5px] font-bold text-gray-600 hover:text-[#82E602] cursor-pointer "
          to="/daily-deals"
        >
           Offres quotidiennes
        </Link>
        <p className="py-8 group font-bold text-gray-600 hover:text-[#82E602] cursor-pointer ">
          <div className="flex gap-2 relative">
            <p>Produits </p>
            <IoIosArrowDown className="font-bold mt-1 " size={15} />
          </div>
          <div className="hidden transition duration-500 ease-in font-normal group-hover:flex flex-row justify-center gap-16 text-black w-[100%] mx-auto z-10  bg-white mt-2 py-2 absolute inset-x-0 top-32 h-[100vh] ">
            <hr />
            <div className="flex text-gray-400 flex-col gap-2">
              <img src={product1} alt="product1" className="w-[250px]" />
              <p className="text-start text-gray-500 p-2 font-semibold text-2xl hover:bg-gray-200  rounded-lg">
                Power
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
                Power Banks
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Multiprises 
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm   rounded-lg">
              Chargeurs de Voiture
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm rounded-lg">Cable</p>
              <p className=" hover:bg-gray-200 p-1 text-sm rounded-lg">
              Chargeurs Muraux
              </p>
            </div>

            <div className="flex text-gray-400 flex-col gap-2">
              <img src={product2} alt="product2" className="w-[250px]" />
              <p className="text-start text-gray-500 p-2 font-semibold text-2xl hover:bg-gray-200  rounded-lg">
                Audio
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Écouteurs Stéréo Sans Fil              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Casque Sans Fil              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Écouteurs Sans Fil              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Casques Sans Fil Parlants              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Écouteurs Filaire
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Haut-Parleurs Sans Fil
              </p> 
            </div>

            <div className="flex text-gray-400 flex-col gap-2">
              <img src={product3} alt="product3" className="w-[250px]" />
              <p className="text-start text-gray-500 p-2 font-semibold text-2xl hover:bg-gray-200  rounded-lg">
                Mode de Vie
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Brosse À Dents Électrique              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Poignée Ventilateur
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Rasage & Épilation
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Souris & Clavier{" "}
              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Balance Intelligente              </p>
              <p className=" hover:bg-gray-200 p-1 text-sm  rounded-lg">
              Aspirateur </p>
             
            </div>

            <div className="flex text-gray-400 flex-col gap-2">
              <img src={product4} alt="product4" className="w-[250px]" />
              <p className="text-start text-gray-500 p-2 font-semibold text-2xl hover:bg-gray-200  rounded-lg">
                Wearables
              </p>
              <p className=" hover:bg-gray-200 p-1  rounded-lg">
              Montres intelligentes
              </p>
              <p className=" hover:bg-gray-200 p-1  rounded-lg">
              Traqueurs d'activité
              </p>
            </div>
          </div>
        </p>
        <p className="py-8 group font-bold text-gray-600 hover:text-[#82E602] cursor-pointer ">
          <div className="flex gap-2">
            <p>Support </p>
            <IoIosArrowDown className="font-bold mt-1 " size={15} />
          </div>
          <div className="hidden font-normal z-10 group-hover:block text-black absolute bg-white mt-2 py-2 w-[350px] h-[220px] ">
            <div className="px-4 my-2">
              Suivi de Commande
              <a
                className="block  p-2 rounded-lg text-gray-800 hover:bg-gray-200"
                href="track-order.com"
              >
                <div>
                  <img
                    src={deliverytohome}
                    alt="deliverytohome"
                    className="h-[30px]"
                  />
                </div>
              </a>
            </div>

            <hr className="mx-2" />

            <div className="px-4">
              Visitez CarlCare
              <a
                className="block  p-2 rounded-lg text-gray-800 hover:bg-gray-200"
                href="track-order.com"
              >
                <div>
                  <img src={carlcare} alt="carlcare" className="h-[35px]" />
                </div>
              </a>
            </div>
          </div>
        </p>
        <Link
          className="py-8 font-bold text-gray-600 hover:text-[#82E602] cursor-pointer "
          to="/New-Arrival"
        >
          Nouvel Arrivage
        </Link>
        <form className="py-5">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div class="relative ml-4">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="block w-full p-4 pl-10 text-sm border border-gray-400  rounded-3xl text-black  w-[180px] h-[40px]  "
              placeholder="search oraimo products"
            />
          </div>
        </form>
        <div className="py-5 text-gray-600 cursor-pointer">
          <BsCart size={25} />
        </div>
        <div className="py-5 text-gray-600 cursor-pointer" onClick={()=>goto("/login")}>
          <HiOutlineUser size={25} />
        </div>
      </div>

      <div className="bg-gray-200 gap-12 p-2 flex justify-center">
        <div className="flex gap-2 text-gray-600">
          <CiDeliveryTruck size={25} />
          <p>Livraison gratuite à partir de 65DHS</p>
        </div>
        <div className="flex gap-2 text-gray-600">
          <AiOutlineDollarCircle size={25} />
          <p>Paiement à la livraison</p>
        </div>

        <div className="flex gap-2 text-gray-600">
          <IoShieldCheckmarkOutline size={25} />

          <p>Garantie sans tracas</p>
        </div>
      </div>
    </>
  );
};

export default AfterNavbar;
