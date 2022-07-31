import "./App.scss";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
      </nav>
      <h1>My website</h1>
    </div>
  );
};

export const About = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
};

export const Contact = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      <h1>Contact Us</h1>
    </div>
  );
};

export const History = () => {
  return (
    <div>
      <h1>Our history</h1>
    </div>
  );
};

export const App = () => {
  return <Home />;
};
