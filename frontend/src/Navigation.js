import { NavigationContainer} from '@react-navigation/native';

import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';
import TrackOrder from './screens/TrackOrder';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';
import { Pressable,Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/CartSlice';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    const numberOfItems = useSelector(selectNumberOfItems);
    
    return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{ contentStyle : { backgroundColor: 'white'}}}>
 
    <Stack.Screen name="CLEVER OFFICE" component={ProductsScreen} options={( {navigation}) => ({
      headerRight: () =>(
        <Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection:'row'}}>
          <FontAwesome5 name="shopping-cart" size= {18} color="gray"/>
          <Text style={{marginLeft : 5 , fontWeight: '500'}}>{numberOfItems} </Text>
         
          <MaterialCommunityIcons
            onPress={() => navigation.navigate('Track Order')}
            name="truck-delivery"
            size={22}
            color="gray"
            style={{marginLeft: 10}}
          />
          
        </Pressable>
      ),
    })}
/>
        
 
    <Stack.Screen name="Product Details" component={ProductDetailsScreen}/>
    <Stack.Screen name="Cart" component={ShoppingCart}/>
    <Stack.Screen name="Track Order" component={TrackOrder}/>
</Stack.Navigator>
</NavigationContainer>
    );
};
export default Navigation;