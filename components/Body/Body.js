import RestaurantCard from "../RestrauntCard/ResCard";
import data from "../../assets/data/restraunts.json";
import "./Body.css";
const resObj = {
  name: "call me chow",
  ratings: 4.4,
  cuisines: "Chinese, Fast Food",
  timings: 40,
};
console.log("data", data);
const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar-container">Search bar</div>
      <div className="res-container">
        {data.map((resData) => (
          <RestaurantCard resData={resData.info} key={resData.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
