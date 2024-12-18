import Footer from "./Footer";
import Navbar from "./Navbar";
import Restaurant from "./Restaurant";
import Skimmer from "./Skimmer";
import { SWIGGY_FETCH_RES_UR } from "./utils/constants";
import React, { useEffect, useState } from "react";

export default Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_FETCH_RES_UR);

    const jsonData = await data?.json();

    const resDataFromApi =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const resDataFromApiWithDiffCardsArrayVal =
      jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResData(
      resDataFromApi === undefined
        ? resDataFromApiWithDiffCardsArrayVal
        : resDataFromApi
    );

    setFilterData(
      resDataFromApi === undefined
        ? resDataFromApiWithDiffCardsArrayVal
        : resDataFromApi
    );
  };

  const handleTopRatedBtnEvent = () => {
    const filterResData = resData.filter((res) => res.info.avgRating > 4);
    setFilterData(filterResData);
  };

  const handleClearFilterBtnEvent = () => {
    setFilterData(resData);
  };

  const handleOnChangeEvent = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchBtnEvent = () => {
    const filterData = resData.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterData(filterData);
  };

  return resData === undefined || resData.length === 0 ? (
    <Skimmer />
  ) : (
    <>
      <Navbar />
      <button className="top-rated-res-btn" onClick={handleTopRatedBtnEvent}>
        Top rated restaurants
      </button>
      <button className="top-rated-res-btn" onClick={handleClearFilterBtnEvent}>
        Clear filters
      </button>
      <input
        type="text"
        placeholder="Enter restaurants name"
        className="search-bar"
        value={searchText}
        onChange={handleOnChangeEvent}
      />
      <button className="search-btn" onClick={handleSearchBtnEvent}>
        Search
      </button>
      <div className="card-container">
        {filterData.map((res) => {
          return (
            <Restaurant
              name={res.info.name}
              image={res.info.cloudinaryImageId}
              cuisines={res.info.cuisines.join(",")}
              rating={res.info.avgRating}
              cost={res.info.costForTwo}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
