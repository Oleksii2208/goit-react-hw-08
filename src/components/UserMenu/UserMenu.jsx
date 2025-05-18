import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <h2>Welcome,{user.name}</h2>
      <button className={s.btn} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
