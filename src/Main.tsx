import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Main;
