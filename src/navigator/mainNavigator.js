import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import CopyOfBlankScreen0222511Navigator from '../features/CopyOfBlankScreen0222511/navigator';
import BlankScreen1222508Navigator from '../features/BlankScreen1222508/navigator';
import BlankScreen0222507Navigator from '../features/BlankScreen0222507/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
CopyOfBlankScreen0222511: { screen: CopyOfBlankScreen0222511Navigator },
BlankScreen1222508: { screen: BlankScreen1222508Navigator },
BlankScreen0222507: { screen: BlankScreen0222507Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
