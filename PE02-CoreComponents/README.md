# Input

The CoreComponents application accepts user input through a React Native TextInput component. Users can enter their favorite MSCS course using the provided field. The application also contains predefined course information stored in arrays, including eight core requirements, two depth-of-study courses, and one capstone course.

# Process

The application uses a functional component defined with an arrow function. React's useState hook manages the favorite-course input. Course arrays are processed using the map() method to generate individual Text components. A ScrollView allows users to navigate the course list. Styles are maintained in a separate module using StyleSheet.create(), improving code organization and maintainability. View components group related interface elements and provide a consistent layout.

# Output

The application displays an image, a heading, an editable input field, and eleven MSCS courses organized into three sections. Consistent spacing, readable fonts, and highlighted section headings improve usability. The interface remains scrollable when content exceeds the available screen space.