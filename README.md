# React + Flux: Module 7

This README covers Hooks, Component Composition, and PropTypes.

# React Hooks

React has many hooks which enable you to perform various tasks that are often repeated for various processes within the scope of your app. So of the more common hooks include

| Hook         | Description                                                                                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useState`   | Use given state, set given state                                                                                                                                                            |
| `useEffect`  | Runs after each render.</br>Watches `$value`, reacts if `$value` changes. Consider this a combination of:</br>`componentDidMount()`</br>`componentDidUpdate()`</br>`componentWillUnmount()` |
| `useContext` | blah                                                                                                                                                                                        |

<details><summary>Example of useState</summary>

```jsx
import React, { useState } from "react";

function Example() {
    const [email, setEmail] = useState(");

    return (
        <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
    );
}
```

</details>

<details><summary>Example of useEffect</summary>

```jsx
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
```

</details>
