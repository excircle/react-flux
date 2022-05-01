import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <App tab="home" />
    </Router>
);