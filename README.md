# React + Flux: Module 9

# React Forms

| Old Router Component | New Solution                                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<Route>`            | Previously, `<Route>` was used with a `component={component}` style of syntax.<br/> The new method involves using an "element" property:<br/> `<Route path="*" element={<NotFoundPage />} />`        |
| `<Switch>`           | React Router V6 uses `<Routes>` instead of `<Switch>`. The functionality is the same with a few new properties and functions.                                                                        |
| `<Redirect>`         | In lieu of `<Redirect>`, React Router V6 uses `<Route>` with a call to a `<Navigate>` component. An example would be:<br/> `<Route path="/about-page" element={<Navigate replace to="/about" />} />` |

<details><summary>Example</summary>

```jsx
import React from "react";
```

</details>

# React Forms onChange & Spread Techniques

React Forms typically depend on an `onChange` property in order to work effectively.

When setting state in a Smart component, you can create a spread function to work with multiple `onChange1` properties:

```jsx
import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    setCourse(updatedCourse);
  }

  return (
    <React.Fragment>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
    </React.Fragment>
  );
};

export default ManageCoursePage;
```
