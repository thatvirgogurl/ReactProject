import { RestrauntCard } from "./RestrurantCard";
import { restaurantList, swiggy_api_URL } from "../config";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  //console.log(filterData)
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restro, setRestro] = useState([]);
  const [filterRestro, setfilterRestro] = useState([]);

  useEffect(() => {
    //api call ,it call after initial render
    getData();
  }, []);

  async function getData() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setRestro(json?.data?.cards[2]?.data?.data?.cards);
    setfilterRestro(json?.data?.cards[2]?.data?.data?.cards);
  }
  //if(!restro) return null

  return restro?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restro);
            setfilterRestro(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="Body">
        {filterRestro.length === 0 ? (
          <h1>No data found</h1>
        ) : (
          filterRestro.map((restaurant) => {
            return (
              <RestrauntCard key={restaurant.data.id} {...restaurant.data} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
