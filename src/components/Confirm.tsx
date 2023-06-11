import { Link } from "react-router-dom";

function Confirm() {
  return (
    <>
      <div>confirm</div>
      <nav>
        <ul>
          <li>
            <Link to={`../result`}>확인</Link>
          </li>
          <li>
            <Link to={`../input`}>취소</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Confirm;
