import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    console.log(values);
    actions.resetForm();
  };
  const initialValues = {
    name: "",
    number: "",
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .trim()
      .max(20, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(4, "Too short!")
      .max(25, "Too long!")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        validationSchema={contactSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor={nameFieldId}>
            <span>Name</span>
            <Field
              className={s.field}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage name="name" className={s.error} component="span" />
          </label>
          <label className={s.label} htmlFor={numberFieldId}>
            <span>Number</span>
            <Field
              className={s.field}
              type="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage name="number" className={s.error} component="span" />
          </label>
          <button className={s.btnAdd} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
