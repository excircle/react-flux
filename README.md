# React + Flux: Module 6

This repository is meant to house code and notes pertaining to the Pluralsight coure "Building Application with React and Flux"

# Example Of Class-Based Components

This repository is meant to house code and notes pertaining to the Pluralsight coure "Building Application with React and Flux"

<details><summary>Class-based Component With Formally Declared Props</summary>

```jsx
import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return <h1>Example Value {this.state.value}</h1>;
  }
}

export default Example;
```

</details>

<details><summary>Class-based Component With Shortened Props</summary>

```jsx
import React from "react";

class Example extends React.Component {
  state = { value: 0 };

  render() {
    return <h1>Example Value {this.state.value}</h1>;
  }
}

export default Example;
```

</details>

# Iterative Rendering With Tables & Class-based Components

<details><summary>Javascript API Call</summary>
  
```jsx
// http://www.example.com/courses
const baseUrl = process.env.REACT_APP_API_URL + "/courses/";

// fetch == GET
export function getCourses() {
return fetch(baseUrl)
.then(handleResponse)
.catch(handleError);
}

````
</details>

<details><summary>Javascript API Handlers</summary>

```jsx
export async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
      // So, a server-side validation error occurred.
      // Server side validation returns a string error message, so parse as text instead of json.
      const error = await response.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
  }

  // In a real app, would likely call an error logging service.
  export function handleError(error) {
    // eslint-disable-next-line no-console
    console.error("API call failed. " + error);
    throw error;
  }
````

</details>

<details><summary>Class-based Component Iterating Over JSON Object In State</summary>

```jsx
import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  // Set State Hold "list" of courses
  state = {
    courses: [],
  };

  // After component has been mounted:
  //  - Call "getCourses()"
  //  - Set output to "courses" field in state
  componentDidMount() {
    getCourses().then((courses) => this.setState({ courses: courses }));
  }

  // Return table with the outputs
  render() {
    return (
      <React.Fragment>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            // "for course in courses; do // return table_row + table_data; //
            done;
            {this.state.courses.map((course) => {
              return (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default CoursesPage;
```

</details>
