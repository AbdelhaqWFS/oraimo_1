import React, { useState, useEffect } from "react";
import { GrStar } from "react-icons/gr";
const HomePoductsDisplay = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch()
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data);
    //   });
  }, []);

  return (
    
    <div className="md:m-12 m-8 md:py-8 py-4">
      <div className="text-3xl mt-10 font-bold text-center">
        <p className="my-4">Nouveau Arrivage</p>
        <p className="text-sm text-gray-350 font-normal">Tous les nouveaux arrivages et produits tendances ici!</p>
      </div>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            className="flex flex-col items-center md:h[800px] h-[350px] "
            key={product.id}
          >
            <img
              src={product.image}
              alt="slide"
              className="md:h-[300px] h-[100px] md:w-[300px] w-[100px] mx-2"
            />
            <p className=" text-center font-semibold text-sm">{product.name}</p>
            <div className="flex  my-4 md:my-0">
              <div className="flex items-center">
                {[...Array(product.star_rating)].map((star) => {
                  return (
                    <GrStar className="text-yellow-400 md:text-md text-xs" />
                  );
                })}
              </div>
              <p className="md:text-sm text-sm text-blue-500 md:ml-2">
                {product.reviews} Avis
              </p>
              
            </div>
            <div className="flex gap-4">
              <p className="md:text-lg text-xs font-semibold line-through">
                 {product.initial_price} MAD
              </p>
              <p className="md:text-lg text-xs  font-bold text-[#82E602]">
                {product.actual_price} MAD
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePoductsDisplay;
