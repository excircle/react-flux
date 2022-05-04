import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursePage";
import NotFoundPage from "./NotFoundPage";
import { Route, Routes, Navigate } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
    return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
        <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/course/:slug" element={<ManageCoursePage />} />
            <Route path="/course/" element={<ManageCoursePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/about-page" element={<Navigate replace to="/about" />} />
          </Routes>
    </div>
    );
}

export default App;