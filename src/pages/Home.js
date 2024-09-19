import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/frame.jpg";
import "../styles/Home.css";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';


function Home() {
  return (
    <div>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Artivities </h1>
        <p> Vintage touch to your homes.</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
      </div>
      <div className="features">
      <div className="socialMedia">
        <LocalShippingIcon /> <OfflineBoltIcon /> <PermPhoneMsgIcon /> 

      </div>
    </div>
    
    <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Artivities, where vintage charm meets timeless memories. At Artivities, we specialize in curating a collection of vintage frames, scrapbooks, and customizable memorabilia that help preserve your most cherished moments in style. Our passion lies in blending the nostalgia of yesteryears with the modern need to immortalize precious memories. Whether you're seeking a unique frame to showcase a treasured photograph or a personalized scrapbook to capture life's special milestones, Artivities is your destination for quality craftsmanship and heartfelt keepsakes. Join us on a journey to preserve the past and create lasting memories for generations to come.
        </p>
      </div>

      <div className="menu">
      <h1 className="menuTitle">Products</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Home;
