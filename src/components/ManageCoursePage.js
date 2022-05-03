import React from "react";
import { useParams } from "react-router-dom";

const ManageCoursePage = props => {
    let { slug } = useParams();
    return (
        <React.Fragment>
            <h2>Courses</h2>
            <p>{slug}</p>
        </React.Fragment>
    )
}

export default ManageCoursePage;