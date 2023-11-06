import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
