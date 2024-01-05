import RestaurantCard from "../RestrauntCard/ResCard";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar-container">Search bar</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
