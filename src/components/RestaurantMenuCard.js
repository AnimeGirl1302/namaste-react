import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenuCard = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const { resId } = useParams();

  console.log('rest Id ', resId);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const url = MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER";
    console.log('url', url);
    const restaurantMenuAPIData = await fetch(url);

    const restaurantData = await restaurantMenuAPIData.json();
    console.log("Restaurant data ", restaurantData);

    setRestaurantMenu(restaurantData?.data);
  };

  if (restaurantMenu === null) return <Shimmer />;

  console.log('rest menu', restaurantMenu);

  const { name, cuisines } = restaurantMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;

  return (
    <div>
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenuCard;
