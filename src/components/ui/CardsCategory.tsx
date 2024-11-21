import { FC, useMemo } from "react";
import { useMealsStore } from "../../store/meals";

type Props = {
  title?: string;
  totals?: number;
};

export const CardsCategory: FC<Props> = ({ title, totals }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoTotals = useMemo(() => totals, []);
  const { categoryFilter, setFilterMealsByCategory } = useMealsStore();

  const isSelected = () => {
    if (!title) return categoryFilter === null;
    return categoryFilter === title;
  };

  return (
    <button
      onClick={() => {
        if (isSelected()) return;
        setFilterMealsByCategory(title ?? null);
      }}
      className={`flex-shrink-0 flex cursor-pointer flex-row justify-between items-center px-6 py-2.5 rounded-full  ${
        isSelected() ? "bg-orange-500" : "bg-blue-100"
      }`}
    >
      <p
        className={`text-sm ${isSelected() ? "text-white" : "text-blue-950 "}`}
      >
        {title ?? "All"} {memoTotals}
      </p>
    </button>
  );
};
