# 0x02-react_props

**Creating basic React components using functions:**

- Define a JavaScript function that returns JSX (React elements).
- Use the function name with a capital letter as the component's name.
- Encapsulate component logic and UI within the function's body.
- Render the component within other components or the main application.

**Reusing components:**

- Identify common UI elements or functionalities that can be abstracted.
- Create separate React components for these reusable parts.
- Import and use these components in other parts of the application.
- This promotes modularity and reduces code duplication.

**Passing properties to components:**

- Use attributes (props) when rendering a component.
- Define the properties within the component's definition.
- Access these properties within the component using the `props` object.
- Properties allow passing data from parent components to child components.

**Defining types for components:**

- Use TypeScript or PropTypes to define types for React components.
- TypeScript provides static type checking, while PropTypes are runtime checks.
- Specify the expected data types and shapes of component props.
- This helps catch errors early and improves code reliability.

**Using Fragments:**

- Fragments allow grouping multiple JSX elements without adding an extra parent element.
- Wrap elements with an empty tag `<React.Fragment>` or use the shorthand `<>`.
- Useful when a single parent element is required (e.g., in a map function).

**Using keys to improve loop's performance:**

- When rendering a list of elements in React (e.g., using `map`), provide a unique `key` prop to each element.
- Keys help React identify which elements have changed, added, or removed during re-rendering.
- Efficiently using keys can significantly improve the performance of rendering lists.
- Use stable identifiers like unique IDs, rather than array indices, as keys to avoid unexpected behavior.
