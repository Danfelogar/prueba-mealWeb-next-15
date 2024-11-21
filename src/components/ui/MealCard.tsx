"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaHeart, FaClock, FaUtensils, FaStar } from "react-icons/fa";
import Link from "next/link";
import { useMealsStore } from "@/src/store";

type Props = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
};

export const MealCard: FC<Props> = ({
  idMeal,
  strArea,
  strCategory,
  strMeal,
  strMealThumb,
}) => {
  const { setIdMeal } = useMealsStore();
  const router = useRouter();

  return (
    <div
      onClick={() => {
        setIdMeal(null);
        setIdMeal(idMeal);
        router.push(`/meal/${idMeal}`);
      }}
      className="cursor-pointer max-w-sm rounded-lg mb-2.5 overflow-hidden shadow-lg border border-gray-200 transform transition-all duration-300 hover:scale-[1.1]"
    >
      <div className="flex relative w-[18rem] h-[10rem]">
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
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-lg text-rose-800 font-bold line-clamp-1">
              {strMeal}
            </h2>
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
          <div className="flex items-center ml-auto">
            <FaClock className="text-gray-600 mr-1" />
            <span className="text-gray-600">20-30</span>
          </div>
        </div>
      </div>
    </div>
  );
};
