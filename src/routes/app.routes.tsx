import { Routes, Route } from "react-router-dom";
import { DeleteUser } from "../pages/DeleteUser";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DeleteUser />} />
    </Routes>
  );
}