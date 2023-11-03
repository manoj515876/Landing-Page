import React from "react";
import ReactDOMClient from "react-dom/client";
import { LandingPageDesktop } from "./screens/LandingPageDesktop";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LandingPageDesktop />);
