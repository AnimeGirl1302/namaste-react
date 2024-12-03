import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/restaurantList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantsList, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchSwiggyAPIData();
  }, []);

  const [searchText, setSearchText] = useState("");

  const fetchSwiggyAPIData = async () => {
    const swiggyAPIData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await swiggyAPIData.json();
    console.log("Swigy API data", data);
    setRestaurantList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              const searchValue = e.target.value;
              setSearchText(searchValue);
              if (searchValue === "") {
                fetchSwiggyAPIData();
              }
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestaurants = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurantsList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}  key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
