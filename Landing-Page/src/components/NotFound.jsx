import "../css/NotFound.css";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not__found">
      {/* Split "404" into separate elements */}
      <h1>
        <span className="digit">4</span>
        <span className="zero-circle">0</span>
        <span className="digit">4</span>
        {/* <span class="digit">4</span>
        <span class="digit">0</span>
        <span class="digit">4</span>*/}
      </h1>
      <h2 className="path">
        404 - <span>{location.pathname}</span>
      </h2>
      <p> The requested page does not exist.</p>
    </div>
  );
};

export default NotFound;
