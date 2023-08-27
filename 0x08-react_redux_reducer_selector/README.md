# React Redux Reducer Selector

1. **Purpose of a Reducer and Its Role in the Application:**
A reducer is a crucial concept in state management within applications, often used in conjunction with libraries like Redux. Its primary purpose is to manage and update the application's state in response to actions dispatched by the user or the application itself. Reducers are functions that take the current state and an action as parameters and return a new state. They ensure predictability and maintainability by applying a consistent pattern to state updates.

2. **Why a Reducer Should Stay as Pure as Possible:**
Reducers should be pure functions, meaning their behavior is solely determined by their input parameters and they don't cause side effects. This ensures that given the same input, a reducer will always produce the same output. This predictability is vital for debugging, testing, and understanding the application's behavior over time.

3. **Why Mutations Should Not Happen Within a Reducer:**
Mutating the state directly within a reducer can lead to unintended consequences, as it breaks the principle of immutability. Instead of modifying the existing state, reducers should create and return a new state object. This avoids issues like race conditions, bugs, and unpredictable behavior.

4. **Use of Immutable Within the Reducer:**
Immutability means that data, once created, cannot be changed. Reducers should embrace immutability by creating new copies of state objects with the necessary changes, rather than modifying the existing state. Libraries like Immutable.js or Immer can help achieve this efficiently by providing tools to work with immutable data structures.

5. **Use of Normalizr Within the App:**
Normalizr is a library used to transform and normalize complex data structures, such as nested JSON objects, into a flat structure. This makes data more efficient to manage and reduces redundancy. It's particularly useful when dealing with relational data, helping to maintain consistency and efficiency in state management.

6. **Selectors: What They Are and When to Use Them:**
Selectors are functions that retrieve specific pieces of data from the application's state. They act as an abstraction layer, decoupling the components from the actual structure of the state. Selectors help improve performance by preventing unnecessary re-renders when only a subset of the state changes. They also centralize the logic for accessing state, making it easier to maintain and update over time. Use selectors whenever you need to retrieve specific information from your state to be used in your components.
