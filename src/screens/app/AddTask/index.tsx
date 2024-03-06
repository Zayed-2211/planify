import React, { useState } from "react";
import { Image, Pressable, SafeAreaView, Text } from "react-native";
import styles from './styles';
import Title from "../../../components/Title";
import OutlinedInput from "../../../components/OutlinedInput";
import Categories from "../../../components/Categories";
import categories from '../../../constants/categories';

const AddTask = ({navigation}: {navigation:any}) => {
    const [category, setCategory] = useState()

    const handleBack = () => {
        navigation.goBack()
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.iconContainer} onPress={handleBack} hitSlop={8}>
                <Image style={styles.icon} source={require('../../../assets/back.png')} />
            </Pressable>

            <Title type='thin'>Add New Task</Title>

            <Text style={styles.subtitle}>Describe the task</Text>
            <OutlinedInput placeholder="Type here..." />

            <Text style={styles.subtitle}>Type</Text>
            <Categories 
                categories={categories} 
                selectedCategory={category} 
                onCategoryPress={setCategory} 
            />

            <Text style={styles.subtitle}>Deadline</Text>
            <OutlinedInput placeholder="Type here..." />

        </SafeAreaView>
    )
}

export default React.memo(AddTask); 
