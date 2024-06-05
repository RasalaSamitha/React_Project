import { useNavigate } from "react-router-dom";
import { PannelItems } from "../constants";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="pannelItems">
      {PannelItems.map((e) => (
        <p onClick={() => navigate(e.path)}>{e.title}</p>
      ))}
    </div>
  );
}
export default Navbar;
