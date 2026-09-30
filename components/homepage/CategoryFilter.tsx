"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Category = { id: string; label: string; active: boolean };

const CategoryFilter = ({ categories }: { categories: Category[] }) => {
  const [activeId, setActiveId] = useState(
    categories.find((category) => category.active)?.id,
  );

  return (
    <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-x-2 gap-y-3">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => setActiveId(category.id)}
          className={cn(
            "rounded-full px-4 py-2 text-sm transition-colors",
            category.id === activeId
              ? "bg-primary text-dark"
              : "bg-shuttle-gray-50 text-gray hover:bg-shuttle-gray-100",
            category.id === "more" && "bg-transparent text-persian-blue",
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
