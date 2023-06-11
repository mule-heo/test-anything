import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { dateTimeFormat } from "../utils/format";
import "./confirm.css";

function Confirm() {
  const number = useAppSelector((state) => state.phone.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="confirm-container">
      <div className="confirm-wrapper">
        <ul>
          <li>현재 대기 인원 : redux state로 추가하기</li>
          <li>현재 시각 : {dateTimeFormat(undefined, "ko")}</li>
          <li>전화번호 : {number}</li>
        </ul>
      </div>
      <div className="buttons">
        <button onClick={() => navigate("/result")}>확인</button>
        <button onClick={() => navigate("/input")}>취소</button>
      </div>
    </div>
  );
}

export default Confirm;
