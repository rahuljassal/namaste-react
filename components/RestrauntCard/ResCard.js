import "./ResCard.css";
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-image"
        src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/zomato-2-1627023112-sixteen_nine.jpg?size=948:533"
        alt="res-img"
      ></img>
      <h3 className="res-name">Call Me Chow</h3>
      <h4 className="res_rating"> 4.3 stars</h4>
      <h5 className="res_info">Chinese, Asian </h5>
      <h6 className="res_delivery_time">45min </h6>
    </div>
  );
};

export default RestaurantCard;
