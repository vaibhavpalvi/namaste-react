import { useNavigate } from "react-router-dom";
import { SWIGGY_RESTAURANT_MENU_URL } from "./constants";
import { useEffect, useState } from "react";

const useMenuData = (resId) => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState(null);
  const [recommendedMenuItems, setRecommendedMenuItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchResMenuData();
  }, []);

  const fetchResMenuData = async () => {
    const params = new URLSearchParams({
      "page-type": "REGULAR_MENU",
      "complete-menu": true,
      lat: "21.99740",
      lng: "79.00110",
      restaurantId: resId,
    });

    try {
      const data = await fetch(SWIGGY_RESTAURANT_MENU_URL + params);

      const jsonData = await data.json();

      const menuItemCards =
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const recommendedItems = menuItemCards
        .filter(
          (res) =>
            res.card.card.itemCards && res.card.card.title === "Recommended"
        )
        .map((items) => items.card.card.itemCards)
        .flat();
      setMenuData(jsonData?.data?.cards[2]?.card?.card);
      setRecommendedMenuItems(recommendedItems);
    } catch (error) {
      navigate("/internal-server");
    } finally {
      setIsLoading(false);
    }
  };
  return { menuData, recommendedMenuItems, isLoading };
};

export default useMenuData;
