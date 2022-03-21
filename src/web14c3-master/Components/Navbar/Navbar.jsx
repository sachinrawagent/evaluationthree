import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
        <button className="home">Home</button>
        </Link>
        <Link to={"/history"}>
        <button className="history">History</button>
        </Link>
        <Link to={"/mystery"}>
        <button className="mystery">Mystery</button>
        </Link>
        <Link to={"/technology"}>
        <button className="technology">Technology</button>
        </Link>
        <Link to={"/mythology"}>
        <button className="mythology">Mythology</button>
        </Link>
      </div>
    </>
  );
};
