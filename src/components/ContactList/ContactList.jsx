import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
