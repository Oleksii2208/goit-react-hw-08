import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <>
      <NavLink className={setActiveClass} to="/login">
        Log In
      </NavLink>
      <NavLink className={setActiveClass} to="/register">
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
