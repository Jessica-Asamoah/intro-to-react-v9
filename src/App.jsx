import { createRoot } from "react-dom"; // named export
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);