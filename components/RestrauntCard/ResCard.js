import "./ResCard.css";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
      ></img>
      <h4 className="res-name">
        {resData.name} <span className="res_rating"> {resData.avgRating}</span>
      </h4>
      <h6 className="res_info">{resData.cuisines.join(" ,")}</h6>
      <h6 className="res_delivery_time">{resData.sla.deliveryTime}</h6>
    </div>
  );
};

export default RestaurantCard;
