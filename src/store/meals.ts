import { create } from "zustand";
import { MealsInitState, MealsState } from "./types/mealsStore";
import { mealsAPI } from "../services";
import { MealResponse } from "../types/meals";
import { CategoryResponse } from "../types/category";

const INITAL_STATE: MealsInitState = {
  isLoading: false,
  idMeal: null,
  singleMeal: null,
  mealsFilters: [],
  mealsCategory: [],
  categoryFilter: null,
};

export const useMealsStore = create<MealsState>((set, get) => ({
  //state
  ...INITAL_STATE,
  //methods
  setLoading: (isLoading) => set({ isLoading }),
  setFilterMealsByCategory: (strCategory) => {
    set({ categoryFilter: strCategory });
  },
  setIdMeal: (idMeal) => set({ idMeal }),
  setSingleMeal: (meal) => set({ singleMeal: meal }),
  setMeals: (meals) => set((state) => ({ ...state, mealsFilters: meals })),
  //actions
  fetchMeals: async () => {
    const currentState = get();
    const { setLoading } = currentState;
    setLoading(true);
    try {
      const res = await mealsAPI.get<MealResponse>(`/search.php?s=`);
      const { meals } = res.data;
      set({ mealsFilters: meals.slice(0, 10) });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  },
  getSingleMeal: async (idMeal) => {
    const currentState = get();
    const { setLoading, setSingleMeal } = currentState;
    setLoading(true);
    try {
      const res = await mealsAPI.get<MealResponse>(`/lookup.php?i=${idMeal}`);
      const { meals } = res.data;
      setSingleMeal(meals[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  },
  fetchCategories: async () => {
    const currentState = get();
    const { setLoading } = currentState;
    setLoading(true);
    try {
      const res = await mealsAPI.get<CategoryResponse>("/categories.php");
      const { categories } = res.data;
      set({ mealsCategory: categories });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  },
  filterMealsByCategory: async () => {
    const currentState = get();
    const { setLoading, categoryFilter } = currentState;
    setLoading(true);
    try {
      const res = await mealsAPI.get<MealResponse>(
        `/filter.php?c=${categoryFilter}`
      );
      const { meals } = res.data;
      set({ mealsFilters: meals });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  },
}));
