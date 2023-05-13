import React, { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/button';

// a schema for the form validation
const reviewSchema = yup.object({
    // a validation rule
    // 1. 'string() -- title must be a string
    // 2. required() -- value box is required. A must fill
    // 3. min() -- the minimum length is 4
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    // note: Inputs by default are strings 
    // - test() -- used to define a function(which takes in the value of the field as a parameter)
    // now there are 3 parameters(where tests are run to return either true or false)
    // 1. name of test
    // 2. a message if failed
    // 3. definition for the validation of the value
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    }))
})

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                // take note of this styling(#30 )
                initialValues={{ title: '', body: '', rating: '' }}

                // for the form validation
                validationSchema={reviewSchema}

                // there are two parameters..
                // 1. 'value' the actual input values
                // 2. 'actions' take in different methods that can be used
                onSubmit={(values, actions) => {
                    addReview(values)
                    // clear form
                    actions.resetForm()
                }}
            >
                {(props) => (
                    <ScrollView>
                        {/* Title input */}
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            // to trigger the validation message
                            onBlur={props.handleBlur('title')}
                            // this is for updating the text input value
                            onChangeText={props.handleChange('title')}
                            // then is provided(reflected) here by this property
                            value={props.values.title}
                        />
                        <Text style={globalStyles.errorText}>
                        {/* 'errors' and 'touched' is a property */}
                        {/* '&&' -- a logically AND operator  */}
                        {/* functions an 'if' statement in this case, where.. */}
                        {/* on the left -- is the argument */}
                        {/* on the right --  is the instruction */}
                            {props.touched.title && props.errors.title}
                        </Text>

                        {/* Body input */}
                        <TextInput
                            style={globalStyles.input}
                            multiline
                            minHeight={60}
                            placeholder='Review body'
                            // to trigger the validation message
                            onBlur={props.handleBlur('body')}
                            // this is for updating the text input value
                            onChangeText={props.handleChange('body')}
                            // then is provided(reflected) here by this property
                            value={props.values.body}
                        />
                        
                        <Text style={globalStyles.errorText}>
                        {/* 'errors' and 'touched' is a property */}
                        {/* '&&' -- a logically AND operator  */}
                        {/* functions an 'if' statement in this case, where.. */}
                        {/* on the left -- is the argument */}
                        {/* on the right --  is the instruction */}
                            {props.touched.body && props.errors.body}
                        </Text>

                        {/* ratings input */}
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating ( 1 - 5) '
                            // to trigger the validation message
                            onBlur={props.handleBlur('rating')}
                            // this is for updating the text input value
                            onChangeText={props.handleChange('rating')}
                            // then is provided(reflected) here by this property
                            value={props.values.rating}
                            keyboardType='numeric'

                        />
                        <Text style={globalStyles.errorText}>
                        {/* 'errors' and 'touched' is a property */}
                        {/* '&&' -- a logically AND operator  */}
                        {/* functions an 'if' statement in this case, where.. */}
                        {/* on the left -- is the argument */}
                        {/* on the right --  is the instruction */}
                            {props.touched.rating && props.errors.rating}
                        </Text>
                        <FlatButton text='submit' onPress={props.handleSubmit} />
                    </ScrollView>

                )}
            </Formik>
        </View>
    )
}