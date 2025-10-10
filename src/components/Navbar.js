const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid grey",
        backgroundColor: "lightgrey",
      }}
    >
      <h1>LOGO</h1>
      <ul className="menu-items">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>CART</li>
      </ul>
    </div>
  );
};

export default Navbar;
