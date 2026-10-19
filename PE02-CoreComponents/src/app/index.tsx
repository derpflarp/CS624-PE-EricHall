import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import styles from './courseStyles';

// define the eight core courses required for the mscs program
// storing the courses in an array avoids repeating components in the layout
// the array also makes it easier to update course information later
const coreCourses = [
  'CS 504 Software Engineering',
  'CS 506 Programming for Computing',
  'CS 519 Cloud Computing Overview',
  'CS 533 Computer Architecture',
  'CS 547 Secure Systems and Programs',
  'CS 622 Discrete Math and Algorithms for Computing',
  'DS 510 Artificial Intelligence for Data Science',
  'DS 620 Machine Learning & Deep Learning',
];

// define the two depth-of-study courses
// keeping course categories separate simplifies displaying each section
const depthCourses = [
  'CS 624 Full-Stack Development - Mobile App',
  'CS 628 Full-Stack Development - Web App',
];

// define the capstone course in its own array
const capstoneCourses = [
  'CS 687 Computer Science Capstone',
];

// use an arrow function to define the main functional component
// this satisfies the assignment requirement for component structure
const CoreComponents = () => {
  // initialize state to store the user's favorite course
  // the state begins as an empty string because no course has been entered
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    // scrollview allows the entire course list to scroll vertically
    // this is useful when the content exceeds the available screen height
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* display the application icon above the course information */}
      {/* the image is centered and sized using the external stylesheet */}
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* display a heading to identify the purpose of the application */}
      <Text style={styles.title}>
        MSCS Course Requirements
      </Text>

      {/* group the favorite-course question and input field together */}
      {/* this keeps related interface elements visually organized */}
      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>
          Which course did you like?
        </Text>

        {/* allow users to enter the course they enjoyed most */}
        {/* the value comes from component state */}
        {/* onchangeText updates state as the user types */}
        <TextInput
          style={styles.textInput}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
          autoCapitalize="characters"
        />
      </View>

      {/* display the eight core requirements */}
      {/* the highlighted heading separates core courses from other categories */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>
          Core Requirements (24 credits)
        </Text>

        {/* iterate through the array and display each course */}
        {/* map eliminates the need to manually create eight text components */}
        {coreCourses.map((course) => (
          <Text key={course} style={styles.courseText}>
            {course}
          </Text>
        ))}
      </View>

      {/* display the two depth-of-study courses */}
      {/* reuse the same styles to keep the interface consistent */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>
          Depth of Study (6 credits)
        </Text>

        {/* generate text components using the depth-of-study array */}
        {depthCourses.map((course) => (
          <Text key={course} style={styles.courseText}>
            {course}
          </Text>
        ))}
      </View>

      {/* display the capstone requirement separately */}
      {/* a separate section makes the final program requirement easy to find */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>
          Capstone (3 credits)
        </Text>

        {/* display the capstone course using the same list formatting */}
        {capstoneCourses.map((course) => (
          <Text key={course} style={styles.courseText}>
            {course}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

// export the component as the default screen for expo router
export default CoreComponents;