import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

// loads the profile image from the existing styling application.
const userImage = require('../../assets/images/user.png');

// creates six profiles for the gallery.
// each profile starts in its collapsed thumbnail state.
// the same image is used for all six profiles.
const data = [
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' +
      'He loves using JS to build React Native applications ' +
      'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Jane Smith',
    occupation: 'Software Engineer',
    description: 'Jane enjoys creating mobile applications and ' +
      'building useful software with JavaScript and React Native.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Michael Johnson',
    occupation: 'Web Developer',
    description: 'Michael specializes in web development and ' +
      'enjoys creating responsive applications for users.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Sarah Williams',
    occupation: 'UI/UX Designer',
    description: 'Sarah designs user interfaces and focuses on ' +
      'making applications simple and easy to use.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'David Brown',
    occupation: 'Mobile Developer',
    description: 'David builds mobile applications and enjoys ' +
      'working with React Native for iOS and Android.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Emily Davis',
    occupation: 'Full Stack Developer',
    description: 'Emily works on frontend and backend development ' +
      'and enjoys solving programming challenges.',
    showThumbnail: true
  }
];

// creates a reusable profile card component.
// each profile receives its own data and click handler.
// the card remains in the same gallery position when resized.
const ProfileCard = (props) => {
  const {
    image,
    name,
    occupation,
    description,
    onPress,
    showThumbnail
  } = props;

  // applies the original profile card styling.
  // adds a scaling style based on the current thumbnail state.
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  } else {
    containerStyles.push(styles.cardExpanded);
  }

  // assigns a higher stacking order to expanded cards.
  // this allows an expanded card to overlap nearby thumbnails.
  // the surrounding flexbox positions remain unchanged.
  const wrapperStyles = [
    styles.cardWrapper,
    !showThumbnail && styles.expandedWrapper
  ];

  return (
    <View style={wrapperStyles}>
      <TouchableHighlight
        onPress={onPress}
        underlayColor="transparent"
        style={styles.cardTouchable}
      >
        <View style={containerStyles}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={image}
            />
          </View>

          <View>
            <Text style={styles.cardName}>
              {name}
            </Text>
          </View>

          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              {occupation}
            </Text>
          </View>

          <View>
            <Text style={styles.cardDescription}>
              {description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

// validates the properties passed into each profile card.
// these are retained from the textbook's listing 5.3.
ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    // stores all six profiles in the application's state.
    // changes to a profile's thumbnail state trigger a re-render.
    this.state = {
      data: data
    };
  }

  // changes the selected card between expanded and thumbnail states.
  // immutability-helper updates only the selected profile record.
  // the remaining five profiles maintain their current state.
  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;

    this.setState({
      data: update(this.state.data, {
        [index]: {
          showThumbnail: {
            $set: showThumbnail
          }
        }
      })
    });
  };

  render() {
    // creates one profile card component for each profile record.
    // the index identifies which profile was clicked.
    const list = this.state.data.map(function(item, index) {
      const {
        image,
        name,
        occupation,
        description,
        showThumbnail
      } = item;

      return (
        <ProfileCard
          key={'card-' + index}
          image={image}
          name={name}
          occupation={occupation}
          description={description}
          onPress={this.handleProfileCardPress.bind(this, index)}
          showThumbnail={showThumbnail}
        />
      );
    }, this);

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* keeps all six cards in the same flexbox gallery. */}
        <View style={styles.gallery}>
          {list}
        </View>
      </ScrollView>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  // allows the application to occupy the available screen.
  container: {
    flex: 1
  },

  // centers the gallery within the application.
  // scrolling remains available for smaller screens.
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30
  },

  // uses flexbox to create two columns and three rows.
  // flexdirection arranges the cards horizontally.
  // flexwrap moves each additional pair onto the next row.
  // each card maintains its position regardless of its scale.
  gallery: {
    width: 240,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  // reserves a fixed location for every profile card.
  // scaling changes the visible card size but not its layout space.
  // this prevents other cards from moving when one expands.
  cardWrapper: {
    width: 110,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
    zIndex: 1
  },

  // displays expanded cards above neighboring thumbnails.
  // this does not change their position in the flexbox layout.
  expandedWrapper: {
    zIndex: 10
  },

  // establishes the click area for each profile card.
  // the profile is positioned relative to its assigned grid cell.
  cardTouchable: {
    width: 110,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible'
  },

  // defines the original profile card appearance.
  // absolute positioning keeps the card centered in its grid cell.
  // the original hos06 platform-specific shadows are retained.
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    position: 'absolute',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      },
      // web shadows reproduce the appearance from hos06.
      web: {
        boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)'
      }
    })
  },

  // styles the circular image container.
  // retains the dimensions and platform-specific shadows from hos06.
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15
      },
      // web shadows reproduce the circular image shadow.
      web: {
        boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)'
      }
    })
  },

  // defines the image dimensions within the circular container.
  cardImage: {
    width: 80,
    height: 80
  },

  // displays the profile name with white text and a shadow.
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {
      height: 5,
      width: 5
    },
    textShadowRadius: 3
  },

  // creates the horizontal divider beneath the occupation.
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },

  // formats the occupation using bold text and spacing.
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },

  // displays the profile description using italic text.
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  },

  // reduces the original card to 20 percent of its size.
  // this creates the thumbnail appearance from listing 5.3.
  cardThumbnail: {
    transform: [{scale: 0.2}]
  },

  // enlarges the selected card without changing its grid position.
  // the surrounding five cards remain in their original locations.
  // the scale is selected to resemble the assignment's gallery example.
  cardExpanded: {
    transform: [{scale: 0.4}]
  }
});