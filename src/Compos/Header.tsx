import "../App.scss";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="leftHeader">
          <Link to={`/`} style={{ color: "black" }}>
            <h1>BluBlog</h1>
          </Link>
        </div>
        <div className="rightHeader">
          <RiFacebookCircleFill className="facebook" />
          <AiFillInstagram className="instagram" />
          <AiFillTwitterCircle className="twitter" />
        </div>
      </nav>
    </>
  );
};
