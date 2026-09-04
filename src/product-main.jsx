import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductLanding from "./ProductLanding";
import "./index.css";

const productKey = document.body.dataset.product;
createRoot(document.getElementById("root")).render(<StrictMode><ProductLanding productKey={productKey} /></StrictMode>);
