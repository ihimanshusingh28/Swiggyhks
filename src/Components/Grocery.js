import React from "react";
import RestaurantMenu from "./RestaurantMenu";
const Grocery = () => {
    return (
    <div className="menu-restaurant">
      <h1 className="restaurant-name">{name} (ID: {id})</h1>
      <h2 className="restaurant-cuisines">{cuisines?.join(", ")}</h2>
      <h3 className="restaurant-">{costForTwoMessage}</h3>

      <h2 className="mt-6 mb-2 text-xl font-semibold underline">Menu</h2>
      {menuSections.map((section, index) => (
        <div key={index} className="mb-4 border rounded">
          <button
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
            onClick={() => toggleSection(index)}
          >
            {section.title}
          </button>

          {openSectionIndex === index && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 py-3 bg-white">
              {section.items.map((item) => (
                <RestaurantCards
                  key={item.id}
                  resData={item}
                  onAdd={() => handleAddToCart(item)} // ✅ pass correct handler
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Grocery;
