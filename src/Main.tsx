import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <header>
        <h1>Reservation</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
