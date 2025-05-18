import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(registerThunk(values));
  };
  return (
    <div>
      <div>
        <h2 className={s.title}>Register now!</h2>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          {/* <fieldset class="fieldset"> */}
          <label className={s.label}>
            <span>Name</span>
            <Field
              className={s.field}
              name="name"
              type="name"
              placeholder="Name"
            />
          </label>
          <label className={s.label}>
            <span>Email</span>
            <Field
              className={s.field}
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field
              className={s.field}
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <div>
            <Link className={s.linkRegister} to="/login">
              You already have account? Sign in!
            </Link>
          </div>
          <button className={s.btn} type="submit">
            Register
          </button>
          {/* </fieldset> */}
        </Form>
      </Formik>
      <Link className={s.linkHome} to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default RegistrationForm;
