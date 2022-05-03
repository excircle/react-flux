import React, { useState }  from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
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
    return (
        <React.Fragment>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} />
        </React.Fragment>
    )
}

export default ManageCoursePage;