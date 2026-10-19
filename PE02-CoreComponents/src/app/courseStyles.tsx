import { StyleSheet } from 'react-native';

// define all application styles in a separate module
// separating styling from component logic improves maintainability
// styles can be updated without modifying the main application layout
const styles = StyleSheet.create({
  // make the application occupy the available screen space
  // use a white background for readability
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  // add spacing around all content inside the scrollview
  // horizontal padding prevents elements from touching screen edges
  // bottom padding ensures the last course remains easy to read
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
    width: '100%',
    maxWidth: 650,
    alignSelf: 'center',
  },

  // center the application icon above the course listing
  // fixed dimensions provide consistent rendering across devices
  // the image uses contain mode to preserve its proportions
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },

  // make the application title visually prominent
  // center alignment separates the title from the left-aligned course list
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222222',
    marginBottom: 30,
  },

  // separate the input area from the course requirements
  // this establishes a visual hierarchy between input and static content
  inputSection: {
    marginBottom: 30,
  },

  // place the input question directly above the editable text field
  inputLabel: {
    fontSize: 16,
    color: '#222222',
    marginBottom: 8,
  },

  // provide a visible border around the input field
  // internal padding keeps typed characters away from the border
  // the height allows enough room for comfortable text entry
  textInput: {
    height: 45,
    borderColor: '#888888',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#222222',
  },

  // apply consistent spacing between the three course categories
  // this prevents different course groups from appearing connected
  section: {
    marginBottom: 30,
  },

  // highlight course-category headings using a yellow background
  // this follows the example interface provided in the assignment
  // increased font size and bold text distinguish headings from courses
  sectionHeading: {
    backgroundColor: '#ffff00',
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 12,
  },

  // use consistent typography for each course description
  // line height and vertical padding improve readability
  // text remains left-aligned to make scanning the list easier
  courseText: {
    fontSize: 15,
    color: '#333333',
    lineHeight: 24,
    paddingVertical: 2,
  },
});

// export the stylesheet so the main component can import it
export default styles;