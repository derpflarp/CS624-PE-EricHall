# Input

The application allows users to enter tasks through a React Native TextInput component. Users type a task into the input field and click the Submit button to add it. The input value is stored in the application's state and updated whenever the user types.

# Process

The application uses React components to separate the heading, input field, and Submit button. When the user clicks Submit, the submitTodo function checks that the input is not empty, creates a new task object, and adds it to the todos array. Each task includes a title, index, and completion status. The application then clears the input field and logs the updated array to the console.

# Output

The application displays a heading, input field, and Submit button. After submitting a task, the console displays the updated array of todos. This confirms that tasks are being stored correctly for future functionality.