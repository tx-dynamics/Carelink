import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../../config/colors'
import Header from '../../../../components/Header'
import { appIcons } from '../../../../Constants/Utilities/assets'
import ActiveContractCard from '../../../../components/ActiveContractCard/ActiveContractCard'
import HeaderForSpace from '../../../../components/HeaderForSpace/HeaderForSpace'

const ActiveContracts = ({ navigation }) => {
    const contractData = [
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 1,
            type: "Ordinary Contract",
            agency: "Green Facility",
            provider: "Jack",
            created: "02-12-2023"
        },
        {
            id: 2,
            type: "General Contract",
            agency: "Micheal",
            provider: "Dani",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "General Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
        {
            id: 0,
            type: "Special Contract",
            agency: "ABC Rental",
            provider: "James",
            created: "23-01-2024"
        },
    ]
    return (
        <View style={styles.container}>
            <Header headerLabel={"Active Contracts"} leftImgName={appIcons.headerBack} onPressLeft={() => navigation.goBack()} />
            <FlatList showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <HeaderForSpace />}
                data={contractData}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => <ActiveContractCard
                    type={item.type}
                    agency={item.agency}
                    created={item.created}
                    provider={item.provider}
                />} />

        </View>
    )
}

export default ActiveContracts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
})