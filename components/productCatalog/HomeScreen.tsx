import React from 'react';
import { View } from 'react-native';
import SearchPage from './SearchPage';


export default function HomeScreen(props) {
    return (

        <View>
            <SearchPage theproducts={props.theproducts} />
        </View>

    );
}

