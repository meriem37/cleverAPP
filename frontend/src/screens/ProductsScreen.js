import { StyleSheet, Text, View, Image, FlatList,Pressable,ActivityIndicator} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';
import { useGetProductsQuery } from '../store/apiSlice';
const ProductsScreen = ({ navigation}) => {

  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetProductsQuery();
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error fetching products: {error.error}</Text>;
  }
 const products = data.data;

      return (
        <FlatList
        data={products}
        renderItem={({item}) => (
  <Pressable 
  onPress={() => {
   // dispatch(productsSlice.actions.setSelectedProduct(item.id));
    navigation.navigate('Product Details',{id:item._id});
  }}
   

    
   style={styles.itemContainer}>
          <Image
    source={{
      uri: item.image
    }}
        style={styles.image}
   />
   </Pressable>
       )} 
       numColumns={2}  
        />
    );
};
const styles = StyleSheet.create({
     
    image:{width: "100%", aspectRatio: 1},
    itemContainer: {
      width: "50%",
      padding: 1,
    }
  });
  export default ProductsScreen;