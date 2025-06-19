import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";
import RestaurantCards from "./RestaurantCards";
import { useDispatch } from "react-redux";
import { addItem } from "../utils.js/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); // fetch data
  const dispatch = useDispatch();
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const restaurantInfo =
    resInfo?.data?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

  const { id, name, cuisines, costForTwoMessage } = restaurantInfo || {};

  const regularCards =
    resInfo?.data?.cards?.find(
      (c) => c?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const extractItems = (cards) => {
    const items = [];

    cards?.forEach((card) => {
      const section = card?.card?.card;

      if (section?.itemCards) {
        items.push({
          title: section.title || "Items",
          items: section.itemCards.map((item) => item.card.info),
        });
      } else if (section?.categories) {
        section.categories.forEach((category) => {
          if (category?.itemCards) {
            items.push({
              title: category.title || "Items",
              items: category.itemCards.map((item) => item.card.info),
            });
          }
        });
      }
    });

    return items;
  };

  const menuSections = extractItems(regularCards);

  const toggleSection = (index) => {
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item)); // 🔥 Redux action to add item
  };

  return (
    <div className="menu px-8 py-4">
      <h1 className="text-2xl font-bold">{name} (ID: {id})</h1>
      <h2 className="text-lg">{cuisines?.join(", ")}</h2>
      <h3 className="text-md text-gray-600">{costForTwoMessage}</h3>

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

export default RestaurantMenu;
