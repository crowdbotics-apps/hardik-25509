import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import CopyOfBlankScreen1222517Navigator from '../features/CopyOfBlankScreen1222517/navigator';
import CopyOfBlankScreen1222516Navigator from '../features/CopyOfBlankScreen1222516/navigator';
import CopyOfBlankScreen1222515Navigator from '../features/CopyOfBlankScreen1222515/navigator';
import CopyOfBlankScreen0222512Navigator from '../features/CopyOfBlankScreen0222512/navigator';
import CopyOfBlankScreen0222511Navigator from '../features/CopyOfBlankScreen0222511/navigator';
import BlankScreen1222508Navigator from '../features/BlankScreen1222508/navigator';
import BlankScreen0222507Navigator from '../features/BlankScreen0222507/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
CopyOfBlankScreen1222517: { screen: CopyOfBlankScreen1222517Navigator },
CopyOfBlankScreen1222516: { screen: CopyOfBlankScreen1222516Navigator },
CopyOfBlankScreen1222515: { screen: CopyOfBlankScreen1222515Navigator },
CopyOfBlankScreen0222512: { screen: CopyOfBlankScreen0222512Navigator },
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
