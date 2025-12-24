import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuResponse } from "./queries/useMenuWithCategories";

export function Menu(menu: MenuResponse) {
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  return Object.keys(menu).map((category) => {
    const categoryItems = menu[category];
    const hasMoreItems = categoryItems.length > 3;
    const isExpanded = expandedCategories[category];

    const toggleCategory = (category: string) => {
      setExpandedCategories((prev) => ({
        ...prev,
        [category]: !prev[category],
      }));
    };

    return (
      <div key={category} className="mb-20 relative">
        <h3 className="text-2xl md:text-3xl mb-8 text-center font-playfair text-amber-400">
          {category}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {categoryItems
            .filter((item) => item.is_active)
            .map((item, index) => (
              <div
                key={index}
                className={`${!isExpanded && index >= 3 ? "hidden" : ""}`}
              >
                <MenuItem {...item} />
              </div>
            ))}
        </div>

        {hasMoreItems && (
          <div
            className={`${
              isExpanded ? "sticky bottom-0 left-0 right-0 py-4 z-10" : "mt-4"
            }`}
          >
            <button
              onClick={() => toggleCategory(category)}
              className="flex justify-center items-center mx-auto px-6 py-2.5 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-cinzel text-sm tracking-wide"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    );
  });
}
