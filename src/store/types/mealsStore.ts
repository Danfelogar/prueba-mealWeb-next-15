import { SingleCategory } from "@/src/types/category";
import { SingleMeal } from "@/src/types/meals";

export interface MealsState {
  //states
  isLoading: boolean;
  singleMeal: SingleMeal | null;
  idMeal: string | null;
  mealsFilters: SingleMeal[];
  mealsCategory: SingleCategory[];
  categoryFilter: string | null;
  //methods
  setLoading: (isLoading: boolean) => void;
  setIdMeal: (idMeal: string | null) => void;
  setFilterMealsByCategory: (strCategory: string | null) => void;
  setSingleMeal: (meal: SingleMeal) => void;
  setMeals: (meals: SingleMeal[]) => void;
  //actions
  fetchMeals: () => void;
  getSingleMeal: (idMeal: string) => void;
  fetchCategories: () => void;
  filterMealsByCategory: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface MealsInitState
  extends Omit<
    MealsState,
    | "setLoading"
    | "setFilterMealsByCategory"
    | "setSingleMeal"
    | "setIdMeal"
    | "setMeals"
    | "fetchMeals"
    | "getSingleMeal"
    | "fetchCategories"
    | "filterMealsByCategory"
  > {}
