# React + Flux: Module 8

This README covers React Router.

# React Router V6 Components

React Router V6 is completely different from previous versions of React Router. The main difference is the departure from using classic components (I.E: `<Switch>`, `<Redirect>`) to using explicit javascript functions.

This document will not cover the specific changes between `<V6` and `V6` but will instead offer a base solution.

| Old Router Component | New Solution                                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<Route>`            | Previously, `<Route>` was used with a `component={component}` style of syntax.<br/> The new method involves using an "element" property:<br/> `<Route path="*" element={<NotFoundPage />} />`        |
| `<Switch>`           | React Router V6 uses `<Routes>` instead of `<Switch>`. The functionality is the same with a few new properties and functions.                                                                        |
| `<Redirect>`         | In lieu of `<Redirect>`, React Router V6 uses `<Route>` with a call to a `<Navigate>` component. An example would be:<br/> `<Route path="/about-page" element={<Navigate replace to="/about" />} />` |

<details><summary>Example of ReactRouter V6 with Above Features</summary>

```jsx
import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursePage";
import NotFoundPage from "./NotFoundPage";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about-page" element={<Navigate replace to="/about" />} />
      </Routes>
    </div>
  );
}

export default App;
```

</details>

# Retriving a Slug

React Router V6 does many things which are incredibly strange to me. One of the strange things it does is force the use of variable names when using it's hooks.

In the case of retriving a slug from URL parameters, it requires that you contain the URL slug into a variable called `slug`

<details><summary>ReactRouter V6 Slug Retrieval</summary>

```jsx
import React from "react";
import { useParams } from "react-router-dom";

const ManageCoursePage = (props) => {
  let { slug } = useParams();
  return (
    <React.Fragment>
      <h2>Courses</h2>
      <p>{slug}</p>
    </React.Fragment>
  );
};

export default ManageCoursePage;
```

</details>
