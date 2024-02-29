import React from "react";
import { Image, SafeAreaView, Text } from "react-native";
import styles from './styles';
import Header from "../../../components/Header";

const Tasks = () => {
    
    return (
        <SafeAreaView>
            <Header title={'Tasks'} />
        </SafeAreaView>
    )
}

export default React.memo(Tasks); 
