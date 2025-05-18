import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
    // console.log(values);
  };
  return (
    <div>
      <div>
        <h2 className={s.title}>Login now!</h2>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          {/* <fieldset class="fieldset"> */}
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
            <Link className={s.linkRegister} to="/register">
              You don't have account? Sign Up!
            </Link>
          </div>
          <button className={s.btn} type="submit">
            Login
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

export default LoginForm;
