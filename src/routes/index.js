import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Home, Package } from '../pages'

const Router = createBottomTabNavigator({
    Home, Package
})

export default createAppContainer(Router)