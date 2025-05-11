import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={s.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
      {loading && !error && <b>Request in progress...</b>}
      {error && <h2>Server is dead...</h2>}
    </>
  );
};

export default ContactList;
