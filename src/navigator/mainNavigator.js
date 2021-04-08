import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen4222752Navigator from '../features/BlankScreen4222752/navigator';
import CopyOfUserProfile19222729Navigator from '../features/CopyOfUserProfile19222729/navigator';
import CopyOfBlankScreen1222521Navigator from '../features/CopyOfBlankScreen1222521/navigator';
import UserProfile19222520Navigator from '../features/UserProfile19222520/navigator';
import CopyOfBlankScreen1222519Navigator from '../features/CopyOfBlankScreen1222519/navigator';
import CopyOfBlankScreen1222518Navigator from '../features/CopyOfBlankScreen1222518/navigator';
import CopyOfBlankScreen1222517Navigator from '../features/CopyOfBlankScreen1222517/navigator';
import CopyOfBlankScreen1222516Navigator from '../features/CopyOfBlankScreen1222516/navigator';
import CopyOfBlankScreen1222515Navigator from '../features/CopyOfBlankScreen1222515/navigator';
import CopyOfBlankScreen0222512Navigator from '../features/CopyOfBlankScreen0222512/navigator';
import BlankScreen1222508Navigator from '../features/BlankScreen1222508/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen4222752: { screen: BlankScreen4222752Navigator },
CopyOfUserProfile19222729: { screen: CopyOfUserProfile19222729Navigator },
CopyOfBlankScreen1222521: { screen: CopyOfBlankScreen1222521Navigator },
UserProfile19222520: { screen: UserProfile19222520Navigator },
CopyOfBlankScreen1222519: { screen: CopyOfBlankScreen1222519Navigator },
CopyOfBlankScreen1222518: { screen: CopyOfBlankScreen1222518Navigator },
CopyOfBlankScreen1222517: { screen: CopyOfBlankScreen1222517Navigator },
CopyOfBlankScreen1222516: { screen: CopyOfBlankScreen1222516Navigator },
CopyOfBlankScreen1222515: { screen: CopyOfBlankScreen1222515Navigator },
CopyOfBlankScreen0222512: { screen: CopyOfBlankScreen0222512Navigator },
BlankScreen1222508: { screen: BlankScreen1222508Navigator },

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
