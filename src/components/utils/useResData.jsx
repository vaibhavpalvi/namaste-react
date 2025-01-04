import { useEffect, useState } from "react";
import { SWIGGY_FETCH_RES_UR } from "./constants";
import { useNavigate } from "react-router-dom";

const useResData = () => {
  const navigate = useNavigate();
  const [resData, setResData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_FETCH_RES_UR);
      const jsonData = await data.json();
      const resDataFromApi =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      const resDataFromApiWithDiffCardsArrayVal =
        jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setResData(resDataFromApi || resDataFromApiWithDiffCardsArrayVal);
    } catch (error) {
      navigate("/internal-server");
    } finally {
      setIsLoading(false);
    }
  };

  return { resData, isLoading };
};

export default useResData;
