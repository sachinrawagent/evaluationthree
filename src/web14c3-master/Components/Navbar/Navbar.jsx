import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <button className="home">Home</button>
        </Link>
        <Link to={"/section/history"}>
          <button className="history">History</button>
        </Link>
        <Link to={"/section/mystery"}>
          <button className="mystery">Mystrey</button>
        </Link>
        <Link to={"/section/technology"}>
          <button className="technology">Technology</button>
        </Link>
        <Link to={"/section/mythology"}>
          <button className="mythology">Mythology</button>
        </Link>

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
