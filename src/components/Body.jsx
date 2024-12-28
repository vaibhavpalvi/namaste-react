import Restaurant from "./Restaurant";
import Skimmer from "./Skimmer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useResData from "./utils/useResData";

export default Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);

  const { resData, isLoading } = useResData();

  useEffect(() => {
    if (!isLoading) {
      setFilterData(resData);
    }
  }, [isLoading, resData]);

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

  return filterData === undefined || filterData.length === 0 ? (
    <Skimmer />
  ) : (
    <>
      <button
        className="bg-yellow-100 my-5 mx-5 rounded-lg border-2 p-1"
        onClick={handleTopRatedBtnEvent}
      >
        Top rated restaurants
      </button>
      <button
        className="bg-red-300 my-10 mx-5 rounded-lg border-2 p-1"
        onClick={handleClearFilterBtnEvent}
      >
        Clear filters
      </button>
      <input
        type="text"
        placeholder="Enter restaurants name"
        className="border-2 rounded-lg p-1"
        value={searchText}
        onChange={handleOnChangeEvent}
      />
      <button
        className="bg-green-300 mx-5 rounded-lg border-2 p-1"
        onClick={handleSearchBtnEvent}
      >
        Search
      </button>
      <div className="flex flex-wrap justify-between gap-2">
        {filterData.map((res) => {
          return (
            <Link to={"/restaurant-menu/" + res.info.id} key={res.info.id}>
              <Restaurant
                name={res.info.name}
                image={res.info.cloudinaryImageId}
                cuisines={res.info.cuisines.join(",")}
                rating={res.info.avgRating}
                cost={res.info.costForTwo}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
