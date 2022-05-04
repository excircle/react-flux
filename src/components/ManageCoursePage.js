import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";


const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});
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

    function formIsValid() {
        const _errors = {};

        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author is required";
        if (!course.category) _errors.category = "Category is required";

        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        courseApi.saveCourse(course).then( () => {
            history("/courses");
            toast.success("Course saved.");
        });
    }

    return (
        <React.Fragment>
            <h2>Manage Course</h2>
            <CourseForm errors={errors} course={course} onChange={handleChange} onSubmit={handleSubmit}/>
        </React.Fragment>
    )
}

export default ManageCoursePage;