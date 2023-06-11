import { Link } from "react-router-dom";

function Input() {
  return (
    <>
      <div>input</div>
      <nav>
        <ul>
          <li>
            <Link to={`../confirm`}>확인</Link>
          </li>
          <li>
            <Link to={`../input`}>취소</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Input;
