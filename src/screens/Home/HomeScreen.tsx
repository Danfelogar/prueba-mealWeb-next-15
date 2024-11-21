"use client";

import { CardsCategory, MealCard } from "@/src/components";
import { useMealsStore } from "@/src/store";
import Image from "next/image";
import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";

export const HomeScreen = () => {
  const {
    //states
    mealsFilters,
    mealsCategory,
    categoryFilter,
    //actions
    fetchMeals,
    fetchCategories,
    filterMealsByCategory,
  } = useMealsStore();
  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (categoryFilter) filterMealsByCategory();
    else if (categoryFilter === null) fetchMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter]);

  console.log({ mealsFilters });
  return (
    <div className="w-full mt-8 flex flex-row">
      <div className="flex flex-col pl-28">
        <div className=" flex flex-row text-blue-950 text-3xl">
          <span className="text-8xl p-0 m-0">“</span>{" "}
          <span className="ml-3 mt-5">
            People who loves to eat are always Best People
          </span>{" "}
          <span className="mt-14 text-orange-500 ">JULIA CHILD</span>
          <span className="text-8xl ml-2.5 mt-10">“</span>
        </div>
        <div className="relative max-w-[57rem] w-full h-32 md:h-48 lg:h-64 overflow-hidden rounded-md">
          <Image
            src="/banner.png"
            alt="logo"
            layout="fill"
            objectFit=""
            className="w-full rounded-md"
          />
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-4 mb-6 max-w-[57rem]">
          <h1 className="text-2xl font-bold text-rose-800">RECETAS</h1>
          <div className="flex cursor-pointer flex-row justify-between items-center w-[30rem] py-3 px-5 rounded-full bg-blue-100">
            <h4 className="text-md text-gray-400">Search by name</h4>
            <IoSearch size={25} color="#a00931" />
          </div>
        </div>
        {mealsCategory.length > 0 && mealsFilters.length > 0 ? (
          <div className="flex pb-3 flex-row max-w-[57rem] gap-5 overflow-x-auto whitespace-nowrap custom-scrollbar">
            <CardsCategory totals={mealsFilters.length} />
            {mealsCategory.map((category, idx) => (
              <CardsCategory
                key={idx}
                title={category.strCategory}
                totals={
                  mealsFilters.filter(
                    (meal) => meal.strCategory === category.strCategory
                  ).length
                }
              />
            ))}
          </div>
        ) : (
          <div className="m-auto loader" />
        )}
        {mealsFilters.length > 0 ? (
          <div className="grid mt-5 grid-cols-3 gap-5 max-w-[57rem]">
            {mealsFilters.map((meal) => (
              <MealCard
                key={meal.idMeal}
                idMeal={meal.idMeal}
                strArea={meal.strArea ?? categoryFilter}
                strCategory={meal.strCategory ?? categoryFilter}
                strMeal={meal.strMeal}
                strMealThumb={meal.strMealThumb}
              />
            ))}
          </div>
        ) : (
          <div className="m-auto my-8 loader" />
        )}
      </div>
      <div className="w-[10%]" />
    </div>
  );
};
