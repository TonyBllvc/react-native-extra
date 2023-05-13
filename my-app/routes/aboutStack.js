// import * as React from 'react'
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import 'react-native-gesture-handler';
// import { NavigationContainer } from "@react-navigation/native";
// import About from "../screens/about";
// import Home from '../screens/home';
// import { useWindowDimensions } from 'react-native';

// // v6 navigation
// // a type of navigation called 'drawer' navigation

// const Drawer = createDrawerNavigator()

// export default function AboutStack() {
//     const dimensions = useWindowDimensions()

//     return (
//         <NavigationContainer initialRouteName='Home'>
//             <Drawer.Navigator
//                 screenOptions={{
//                     drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
//                     drawerStyle: {
//                         background: '#c6cbef',
//                         width: 240,
//                     }
//                 }}
//             >
//                 <Drawer.Screen name="Home" component={Home} />
//                 <Drawer.Screen name="About" component={About} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// } 