import * as React from 'react';
import { StatusBar, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-material-ui';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import StyledToolbar from '../../toolbar/StyledToolbar';



export default function HomeScreen() {
  const [facilities, setFacilities] = React.useState([]);

  React.useEffect(() => {
    async function loadFacilities() {
      try {
        let response = await fetch('http://maksymkrykhovets-001-site1.btempurl.com/api/Facility');
        let json = await response.json();
        setFacilities(json);
      } catch (error) {
        console.error(error);
      }
    }

    loadFacilities();
  }, []);

  const filters = [
    {
      label: "All"
    },
    {
      label: "Restaurants"
    },
    {
      label: "Cafe"
    },
    {
      label: "Hookah"
    },
    {
      label: "For children"
    },
    {
      label: "Street food"
    },
  ];

  const additionalFilters = [
    {
      label: "View all"
    },
    {
      label: "Trending now"
    },
  ]

  /*
  TODO: 
    # Split and move to separate components
    # Remove inline styles and remove dublications in styles
    # Separate ui from logic
    # Logic for filters
  */
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={"#04B193"} />
      <StyledToolbar />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filter}> 
        <Text
          style={{
            color: "#8D8D8D",
            fontSize: 18,
            fontWeight: "bold"
          }}
        >
          Map:
        </Text>
        {filters.map(x => (
          <Button text={x.label} raised primary style={{ container: { backgroundColor: '#FF8A80', marginHorizontal: 5, borderRadius: 20 } }} />
        ))}
      </ScrollView>
      <View style={styles.mapcontainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 49.8397,
            longitude: 24.0297,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      {additionalFilters.map(x => (
        <Text
          style={{
            color: "#8D8D8D",
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "right",
            marginHorizontal: 20
         }}
        >
         {x.label}
        </Text>
      ))}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        <View style={{ marginHorizontal: 12.5, display: "flex", flexDirection: "row" }}>
          {facilities.map(x => 
            <Card style={{
             container: {
                height: 130,
                backgroundColor: "#E5E2DD",
                width: 165,
                borderRadius: 15
              }
            }}>
              <Text
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  textAlignVertical: "center",
                  color: "#17AA90",
                  fontWeight: "bold",
                  fontSize: 30
                }}
              >
                {x.name}
              </Text>
            </Card>
          )} 
        </View>
      </ScrollView>
      <Text
        style={{
          color: "#8D8D8D",
          fontSize: 18,
          fontWeight: "bold",
          marginHorizontal: 20
        }}
      >
        Popular near you
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        <View style={{ marginHorizontal: 12.5, display: "flex", flexDirection: "row" }}>
          {facilities.map(x => 
            <Card style={{
             container: {
                height: 130,
                backgroundColor: "#E5E2DD",
                width: 165,
                borderRadius: 15
              }
            }}>
              <Text
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  textAlignVertical: "center",
                  color: "#17AA90",
                  fontWeight: "bold",
                  fontSize: 30
                }}
              >
                {x.name}
              </Text>
            </Card>
          )} 
        </View>
      </ScrollView>
      <Text
        style={{
          color: "#8D8D8D",
          fontSize: 18,
          fontWeight: "bold",
          marginHorizontal: 20
        }}
      >
        New ones
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        <View style={{ marginHorizontal: 12.5, display: "flex", flexDirection: "row" }}>
          {facilities.map(x => 
            <Card style={{
             container: {
                height: 130,
                backgroundColor: "#E5E2DD",
                width: 165,
                borderRadius: 15
              }
            }}>
              <Text
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  textAlignVertical: "center",
                  color: "#17AA90",
                  fontWeight: "bold",
                  fontSize: 30
                }}
              >
                {x.name}
              </Text>
            </Card>
          )} 
        </View>
      </ScrollView>
      <Text
        style={{
          color: "#8D8D8D",
          fontSize: 12,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 10
        }}
      >
        2020. All rights are reserved
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mapcontainer: {
    borderRadius: 20,
    marginHorizontal: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 8
  },
  map: {
    height: 300,
  },
  filter: {
    marginVertical: 10,
    alignItems: "baseline",
    paddingHorizontal: 17.5
  }
});
