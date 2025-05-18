import s from "./HomePage.module.css";

const Home = () => {
  return (
    <div>
      <h1 className={s.title}>Welcome to the contact book...</h1>
      <p className={s.text}>
        This application is used to create and save your contacts. Please create
        or log in to an existing account to use the application.
      </p>
    </div>
  );
};

export default Home;
