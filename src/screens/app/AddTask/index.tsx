import React from "react";
import { Image, SafeAreaView, Text } from "react-native";
import styles from './styles';
import Button from "../../../components/Button";

const AddTask = ({navigation}: {navigation:any}) => {
    
    return (
        <SafeAreaView>
        <Text>Add tasks</Text>
        </SafeAreaView>
    )
}

export default React.memo(AddTask); 
