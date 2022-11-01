import "./app.scss";
import { Navbar } from "./components/Nav/Navbar";
import { Slider } from "./components/Slider/Slider";

export const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Slider />
    </div>
  );
};
