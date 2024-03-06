import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native";
import styles from "./styles";
import Title from "../../../components/Title";

const Tasks = () => {
    
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Tasks'} />

            <ScrollView>
                <Title type='thin'>To Do Tasks</Title>
            </ScrollView>

            <PlusIcon />
        </SafeAreaView>
    )
}
PlusIcon
export default React.memo(Tasks); 
