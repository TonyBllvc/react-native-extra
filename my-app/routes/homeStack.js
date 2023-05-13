// v4
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from 'react-navigation';
// v6
import "react-native-gesture-handler"
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import HomeBuild from "./homeDrawer";

// v6 navigation
// a type of navigation called 'stack' navigation


const Stack = createNativeStackNavigator()

export default function HomeStack({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 3 },
                    
                    // We will be putting a background image here
                    
                }}>
                {/* Define our routers */}
                <Stack.Screen
                    name="Home"
                    component={HomeBuild}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Review"
                    component={ReviewDetails}
                    options={{
                        title: 'Review Details',
                        headerTintColor: '#222',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}






// // v4
// // import { createStackNavigator } from "react-navigation-stack";
// // import { createAppContainer } from 'react-navigation';
// // v6
// // import "react-native-gesture-handler"
// // import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import About from "../screens/about";
// import Home from "../screens/home";
// import ReviewDetails from "../screens/reviewDetails";

// // v6 navigation
// // a type of navigation called 'stack' navigation


// const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator()


// function Root() {
//     return (
//         // <NavigationContainer>
//             <Drawer.Navigator>
//                 <Drawer.Screen name="Home" component={Home} />
//                 <Drawer.Screen name="About" component={About} />
//             </Drawer.Navigator>
//         // </NavigationContainer>
//     )

// }

// export default function HomeStack() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 {/* Define our routers */}
//                 <Stack.Screen
//                     name="Root"
//                     component={Root}
//                     options={{
//                         title: 'GameZone',
//                         headerShown: 'false',
//                         headerStyle: {
//                             backgroundColor: '#aaa'
//                         },
//                         headerTintColor: '#222',
//                         headerTitleStyle: {
//                             fontWeight: 'bold'
//                         }
//                     }}
//                 />
//                 <Stack.Screen
//                     name="Review"
//                     component={ReviewDetails} options={{
//                         title: 'Review Details',
//                         headerStyle: {
//                             backgroundColor: '#aaa'
//                         },
//                         headerTintColor: '#222',
//                         headerTitleStyle: {
//                             fontWeight: 'bold'
//                         }
//                     }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }










// // v4
// // import { createStackNavigator } from "react-navigation-stack";
// // import { createAppContainer } from 'react-navigation';
// // v6
// // import "react-native-gesture-handler"
// // import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../screens/home";
// import ReviewDetails from "../screens/reviewDetails";

// // v6 navigation
// // a type of navigation called 'stack' navigation


// // // Remove this section, when program does not work
// // ------- //
// // const stackNavigator = defaultNavigationOptions (
// //     {
// //         headerStyle: {
// //             backgroundColor: '#aaa'
// //         },
// //         headerTintColor: '#eee',
// //         headerTitleStyle: {
// //             fontWeight: 'bold'
// //         }
// //     })
// // ------- //
// // const Stack = createNativeStackNavigator({
//     // // Remove this section, when program does not work
//     // ------- //
//     // defaultNavigationOptions : {
//     //     headerStyle: {
//     //         backgroundColor: '#aaa'
//     //     },
//     //     headerTintColor: '#eee',
//     //     headerTitleStyle: {
//     //         fontWeight: 'bold'
//     //     }
//     // }
//     // ------ //
// // });


// const Stack = createNativeStackNavigator()

// export default function HomeStack() {
//     return (
//         //     <DrawerActions.Navigator initialRouteName="Home" >
//         //         {/* Define our routers */}
//         //         <Stack.Screen name="Home" component={Home} />
//         //         <Stack.Screen name="Review" component={ReviewDetails} />
//         //     </DrawerActions.Navigator>
//         // )
//         <NavigationContainer>
//             <Stack.Navigator>
//                 {/* Define our routers */}
//                 <Stack.Screen
//                     name="Home"
//                     component={Home}
//                     options={{
//                         title: 'GameZone',
//                         headerStyle: {
//                             backgroundColor: '#aaa'
//                         },
//                         headerTintColor: '#222',
//                         headerTitleStyle: {
//                             fontWeight: 'bold'
//                         }

//                         // // Remove this section, when program does not work
//                         // ------- //
//                         // defaultNavigationOptions: { stackNavigator }
//                         // -------- //
//                     }}
//                 />
//                 <Stack.Screen
//                     name="Review"
//                     component={ReviewDetails} options={{
//                         title: 'Review Details',
//                         headerStyle: {
//                             backgroundColor: '#aaa'
//                         },
//                         headerTintColor: '#222',
//                         headerTitleStyle: {
//                             fontWeight: 'bold'
//                         }
//                     }}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// } 