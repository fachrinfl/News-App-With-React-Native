import {Navigation} from 'react-native-navigation'
import { Provider } from "react-redux"
import store from '../redux/store/Store'

import NewsList from '../screens/NewsList'
import NewsDetail from '../screens/NewsDetail'

export function registerAllScreen() {
    Navigation.registerComponent('NewsApp.NewsList', () => NewsList, store, Provider)
    Navigation.registerComponent('NewsApp.NewsDetail', () => NewsDetail, store, Provider)
}