


import React, { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { FOODAPP_URL } from "../utils.js/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setError(null);
      const response = await fetch(FOODAPP_URL);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const json = await response.json();

      const restaurantList =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (Array.isArray(restaurantList)) {
        setListOfRestaurants(restaurantList);
        setFilteredRestaurants(restaurantList);
      } else {
        console.warn("Unexpected restaurant data:", restaurantList);
      }
    } catch (err) {
      setError("Failed to fetch restaurants. Please try again later.");
      console.error("Error fetching restaurants:", err);
    }
  };

  const filterTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (res) => parseFloat(res.info?.avgRating) >= 4.5
    );
    setFilteredRestaurants(filtered);
  };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  if (!onlineStatus) return <h1>🔴 Looks like you are Offline</h1>;

  if (error) return <h1 className="text-red-600">{error}</h1>;

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body-container">
      <div className="search-container-body">
        <input
          type="text"
          aria-label="Search restaurants"
          className="input-box-body"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search restaurants..."
        />
        <button
          className="search-button-body"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="filter-button-body"
          onClick={filterTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-data">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            <RestaurantCards resData={restaurant.info} />
          </Link>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <h2 className="error-restaurants">No restaurants found.</h2>
      )}
    </div>
  );
};

export default Body;
