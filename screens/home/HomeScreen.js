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
  }, [])

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
        <Button text="All" raised primary style={{ container: { backgroundColor: '#FF8A80', marginHorizontal: 5, borderRadius: 20 } }} />
        <Button text="Restaurants" raised primary style={{ container: { backgroundColor: '#FFC830', marginHorizontal: 5, borderRadius: 20 } }} />
        <Button text="Cafe" raised primary style={{ container: { backgroundColor: '#FFC830', marginHorizontal: 5, borderRadius: 20 } }} />
        <Button text="Hookah" raised primary style={{ container: { backgroundColor: '#FFC830', marginHorizontal: 5, borderRadius: 20 } }} />
        <Button text="For children" raised primary style={{ container: { backgroundColor: '#FFC830', marginHorizontal: 5, borderRadius: 20 } }} />
        <Button text="Street food" raised primary style={{ container: { backgroundColor: '#FFC830', marginHorizontal: 5, borderRadius: 20 } }} />
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
      <Text
        style={{
          color: "#8D8D8D",
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "right",
          marginHorizontal: 20
        }}
      >
        view all
          </Text>
      <Text
        style={{
          color: "#8D8D8D",
          fontSize: 18,
          fontWeight: "bold",
          marginHorizontal: 20
        }}
      >
        Trending now
          </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
        <View style={{ marginHorizontal: 12.5, display: "flex", flexDirection: "row" }}>
          <Card
            style={{
              container: {
                height: 130,
                backgroundColor: "#FDCB46",
                width: 100,
                borderRadius: 15
              }
            }}
            onPress={null}
          >
            <Text
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20
              }}
            >
              THIRD COFFEE WAVE
              </Text>
          </Card>
          <Card style={{
            container: {
              height: 130,
              backgroundColor: "#17AA90",
              width: 100,
              borderRadius: 15
            }
          }}>
            <Text
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20
              }}
            >
              {"ITALIAN & TASTY"}
            </Text>
          </Card>
          <Card style={{
            container: {
              height: 130,
              backgroundColor: "#F58E87",
              width: 100,
              borderRadius: 15
            }
          }}>
            <Text
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20
              }}
            >
              MEGA BURGERS
              </Text>
          </Card>
          <Card style={{
            container: {
              height: 130,
              backgroundColor: "#FDCB46",
              width: 100,
              borderRadius: 15
            }
          }}>
            <Text
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20
              }}
            >
              THIRD COFFEE WAVE
              </Text>
          </Card>
          <Card style={{
            container: {
              height: 130,
              backgroundColor: "#17AA90",
              width: 100,
              borderRadius: 15
            }
          }}>
            <Text
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20
              }}
            >
              BACK TO MIAMI
              </Text>
          </Card>
          <Card style={{
            container: {
              height: 130,
              backgroundColor: "#F58E87",
              width: 100,
              borderRadius: 15
            }
          }}>
            <Text
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20
              }}
            >
              YOUR LAST CHANCE
              </Text>
          </Card>
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
          {facilities.map(x => <Card style={{
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
          </Card>)}
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
              36 PO
              </Text>
          </Card>
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
                color: "#595553",
                fontWeight: "bold",
                fontSize: 30
              }}
            >
              GAS LAMP
              </Text>
          </Card>
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
                color: "#F58E87",
                fontWeight: "bold",
                fontSize: 30
              }}
            >
              HASHTAG
              </Text>
          </Card>
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
                color: "#F58E87",
                fontWeight: "bold",
                fontSize: 30
              }}
            >
              Tante
              </Text>
          </Card>
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
              SDV
              </Text>
          </Card>
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
                color: "#595553",
                fontWeight: "bold",
                fontSize: 30
              }}
            >
              Tarilka
              </Text>
          </Card>
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
