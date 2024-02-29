import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../../components/Header';

const Home = () => {
    
    return (
        <SafeAreaView>
            <Header title={'Home'} />
        </SafeAreaView>
    )
}

export default React.memo(Home); 
