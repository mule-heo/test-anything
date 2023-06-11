import { Link } from "react-router-dom";

function Result() {
  return (
    <>
      <div>result</div>
      <nav>
        <ul>
          <li>
            <Link to={`../input`}>처음으로</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Result;
