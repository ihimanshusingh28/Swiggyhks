import React from "react";
import { IMG_CDN_URL } from "../utils.js/constants";

const RestaurantCards = ({ resData, onAdd }) => {
  if (!resData) return null;

  // Check if this is a menu item by looking for price/defaultPrice
  const isMenuItem = resData?.price || resData?.defaultPrice;

  if (isMenuItem) {
    const {
      name,
      description,
      imageId,
      price,
      defaultPrice,
      ratings,
    } = resData;

    const finalPrice = price || defaultPrice;

    return (
      <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition w-full h-full">
        {imageId && (
          <img
            src={IMG_CDN_URL + imageId}
            alt={name}
            className="w-full h-32 object-cover rounded"
          />
        )}
        <h4 className="font-bold text-base">{name}</h4>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        )}
        <p className="text-sm font-semibold text-green-700">₹{finalPrice / 100}</p>
        {ratings?.aggregatedRating?.rating && (
          <span className="text-yellow-500 text-sm">⭐ {ratings.aggregatedRating.rating}</span>
        )}
        <button
          className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          onClick={() => onAdd(resData)}
        >
          Add
        </button>
      </div>
    );
  }

  // Otherwise, render restaurant card (without add button)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    sla,
    avgRating,
    costForTwo,
  } = resData;

  return (
    <div className="border rounded-lg shadow-sm p-3 bg-gray-50 hover:shadow-md transition w-full h-full">
      {cloudinaryImageId && (
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-32 object-cover rounded"
        />
      )}
      <h4 className="font-bold text-base">{name}</h4>
      <p className="text-gray-600 text-sm line-clamp-2">{cuisines?.join(", ")}</p>
      <p className="text-sm text-gray-500">₹{costForTwo / 100}</p>
      <div className="text-sm text-gray-700 flex justify-between w-full">
        <span>⭐ {avgRating}</span>
        <span>{sla?.deliveryTime} mins</span>
      </div>
    </div>
  );
};

export default RestaurantCards;

