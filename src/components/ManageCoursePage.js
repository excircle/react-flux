import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";


const ManageCoursePage = props => {
    const history = useNavigate();
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    function handleChange(event) {
        const updatedCourse = {...course, [event.target.name]: event.target.value};
        setCourse(updatedCourse)
    }

    function handleSubmit(event) {
        event.preventDefault();
        courseApi.saveCourse(course).then( () => {
            history("/courses");
        });
    }

    return (
        <React.Fragment>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit}/>
        </React.Fragment>
    )
}

export default ManageCoursePage;