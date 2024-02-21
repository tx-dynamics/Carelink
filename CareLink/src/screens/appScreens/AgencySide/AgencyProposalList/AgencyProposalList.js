import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../../config/colors'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import { agencyData } from '../AgencyHome/AgencyHome'
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp'
import { fontPixel, heightPixel, routes, widthPixel } from '../../../../Constants'
import { fonts } from '../../../../Constants/Fonts'
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading'

const AgencyProposalList = ({ navigation }) => {
    // const proposalData = [
    //     {
    //         id: 1,
    //         title: "Submitted Proposals",
    //         data: agencyData
    //     },
    //     {
    //         id: 2,
    //         title: "Submitted Proposals",
    //         data: agencyData
    //     },
    // ]
    const DATA = [
        {
            title: 'Submitted Proposals',
            data: agencyData
        },
        {
            title: 'Accepted Proposals',
            data: agencyData.slice(0, 3)
        },
    ];
    return (
        <View style={styles.container}>
            <IconHeaderComp
                title={"Proposal"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <SectionList
                sections={DATA}
                renderItem={({ item }) => (<CustomerListingComp
                    title={item.adress}
                    duration={item.duation}
                    facilityData={item.facility}
                    onPress={() => navigation.navigate(routes.roomDetails)}
                />)}
                renderSectionHeader={({ section: { title, data } }) => (
                    <LeftSideBoldHeading mainStyle={styles.sectionTitleText} title={title} number={data.length} />
                )}
            />
        </View>
    )
}

export default AgencyProposalList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    sectionTitleText: {
        marginVertical: heightPixel(10)
    }
})