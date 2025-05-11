import { BiSolidUser } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div className={s.contact}>
        <div className={s.info}>
          <p className={s.text}>
            <BiSolidUser />
            {name}
          </p>
          <p className={s.text}>
            <FaPhone />
            {number}
          </p>
        </div>
        <button className={s.btnDelete} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
