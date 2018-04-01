import {Navigation} from 'react-native-navigation'

import {registerAllScreen} from './src/utility/routers'

registerAllScreen()

Navigation.startSingleScreenApp({
    screen: {
        screen: 'NewsApp.NewsList',
        title: 'News App',
        navigatorStyle: {
            navBarBackgroundColor: "#FFFFFF",
            navBarTitleTextCentered: true,
            navBarTextFontFamily: 'Roboto-Regular.ttf'
        }
    },
    animationType: 'slide-down'
})