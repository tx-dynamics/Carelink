import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../../config/colors'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import UploadDocumentComp from '../../../../components/UploadDocumentComp/UploadDocumentComp'
import { routes } from '../../../../Constants'

const CertifcateScreen = ({ navigation }) => {
    const certifcateData = [
        {
            id: 1,
            title: "Certificates",
            subtitle: "You have uploaded your certificates to verify with platform",
        },
        {
            id: 2,
            title: "Driving Abstract",
            subtitle: "You have uploaded your driving abstract to verify with platform",
        },
        {
            id: 3,
            title: "Home Photo",
            subtitle: "You have uploaded your home’s photo to verify with platform",
        },
    ]
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white,
        }}>
            <IconHeaderComp
                title={"Certificates"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <FlatList
                keyExtractor={(item) => item.id}
                data={certifcateData}
                renderItem={({ item, index }) => <UploadDocumentComp
                    onPress={() => navigation.navigate(routes.certificateDetail, { item: item })}
                    title={item.title}
                    btnTitle='See Now'
                    subTitle={item.subtitle}
                />} />

        </View>
    )
}

export default CertifcateScreen

const styles = StyleSheet.create({})