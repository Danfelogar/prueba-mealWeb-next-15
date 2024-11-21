"use client";

import { useMealsStore } from "@/src/store";
import Image from "next/image";
import { useEffect } from "react";
import { FaClock, FaHeart, FaStar, FaUtensils } from "react-icons/fa";

export const MealDetailsScreen = () => {
  const { idMeal, singleMeal, getSingleMeal } = useMealsStore();
  if (idMeal === null) {
    return (
      <div className="flex flex-col mt-10 justify-center items-center gap-5 m-auto">
        <div className="loader" />
        <h1 className="text-2xl font-bold text-rose-800">
          You need to browse from the recipe tabs
        </h1>
      </div>
    );
  }
  useEffect(() => {
    if (idMeal) getSingleMeal(idMeal);
  }, [idMeal]);

  if (singleMeal === null || singleMeal?.idMeal !== idMeal) {
    return (
      <div className="flex flex-col mt-10 justify-center items-center gap-5 m-auto">
        <div className="loader" />
        <h1 className="text-2xl font-bold text-rose-800">
          You need to browse from the recipe tabs 222
        </h1>
      </div>
    );
  }

  const { strMealThumb, strMeal, strCategory, strArea, strInstructions } =
    singleMeal;

  return (
    <div className="w-full mt-8 flex gap-5 flex-col">
      <div className="flex flex-col  m-auto">
        <div className="w-full">
          <div className="flex relative overflow-hidden w-[50rem] h-[20rem] rounded-lg">
            <Image
              src={strMealThumb}
              alt={strMeal ?? "/banner.png"}
              className="w-full"
              layout="fill"
            />
            <div className="absolute left-3 bottom-3 bg-red-500 p-3 flex justify-center items-center rounded-full">
              <FaUtensils className="text-white" />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center ml-auto">
              <FaClock className="text-gray-600 mr-1" />
              <span className="text-gray-600">20-30</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-lg text-rose-800 font-bold">{strMeal}</h2>
              </div>
              <FaHeart className="text-red-500 text-[1.2rem]" />
            </div>
            <div className="flex items-center mt-2">
              <div className="flex items-center text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-orange-200">
                  <FaStar />
                </span>
              </div>
              <span className="text-gray-600 ml-2">{idMeal} Reviews</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="bg-gray-100 text-blue-900 text-xs mr-2 px-3 py-0.5 rounded-full">
                {strCategory}
              </span>
              <span className="bg-gray-100 text-blue-900 text-xs mr-2 px-3 py-0.5 rounded-full">
                {strArea}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 m-auto text-md text-rose-600">
        <p>{strInstructions}</p>
      </div>
    </div>
  );
};
