
import { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Card from '../shared/card';
import ReviewForm from './reviewForm';



 // lesson number Y(along with homeStack & reviewDetails) 
export default function Home({ navigation }){
    const [reviews, setReviews] = useState([
        {title: 'Happy are we all forever', rating: 5, body: 'lorem ipsum', key: 1, id: 1},
        {title: 'Happy are we all here today', rating: 4, body: 'lorem ipsum', key: 2, id: 2},
        {title: 'We all know the truth', rating: 2, body: 'lorem ipsum', key: 3, id: 3},
    ])

    // to handle submit
    const addReview = (review) =>{
        // parameter called 'review' containing all current value property(ies)
        // generate a unique key
        review.key = Math.random().toString();
        // to update the state
        setReviews((currentReviews) => {
            // parameter called 'currentReviews' containing all input value property(ies)
            return [ review, ...currentReviews]
        })
        // hide modal
        setModalOpen(false);
    }

    const [ modalOpen, setModalOpen] = useState(false)

    // go back on this component to understand the usage of navigation.navigate..
    return (
        <View style={globalStyles.container}>

        {/* A sort of pop-up tag */}
        <Modal visible={modalOpen} animationType='slide' >
        {/* // take note of 'TouchableWithoutFeedback' */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
        <Icon 
        name='times' 
        size={15}  
        // take note of this styling(#29 )
       style={{...styles.modalToggle, ...styles.modalClose}}        
        onPress={() => setModalOpen(false)}
          />
          
          <ReviewForm addReview={addReview} />

        </View>
        </TouchableWithoutFeedback>
        </Modal>
        <Icon  
        name='plus' 
        size={15} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
          />
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    // A button(TouchableOpacity) that directs what ever data clicked, to a more comprehensive page
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item) } >
                        <Card>
                            {/* this is a "props.children" component */}
                            <Icon name='book-open' />
                            <Text style={globalStyles.titleText}> 
                                { item.title }
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    modalContent: {
        flex: 1,

    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f9',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    }
})






//  // lesson number Z(along with homeStack & reviewDetails)
// import { useState } from 'react';
// import { FlatList, StyleSheet, Text, Button, View } from 'react-native';
// import { globalStyles } from '../styles/global';

// export default function Home({ navigation }){
//     const [reviews, setReviews] = useState([
//         {title: 'Happy are we all forever', rating: 5, body: 'lorem ipsum', key: 1, id: 1},
//         {title: 'Happy are we all here today', rating: 4, body: 'lorem ipsum', key: 2, id: 2},
//         {title: 'We all know the truth', rating: 2, body: 'lorem ipsum', key: 2, id: 3},
//     ])

//     const pressHandler = () => {
//         navigation.navigate('Review');

//         // or

//         // navigation.push('Review');
//     }

//     return (
//         <View style={globalStyles.container}>
//             <Text style={globalStyles.titleText} > Home Screen </Text>
//             <Button title='go to review' onPress={pressHandler} />
//         </View>
//     )
    
// }





// import { StyleSheet, Text, View } from 'react-native';

// export default function Home(){
//     return (
//         <View style={StyleSheet.container}>
//             <Text style={styles.titleText} > Home Screen</Text>
//         </View>
//     )
    
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 24, 
//     },
//     titleText: {
//         fontFamily: 'nunito-bold',
//         fontSize: 18,
//     }
  
// });
