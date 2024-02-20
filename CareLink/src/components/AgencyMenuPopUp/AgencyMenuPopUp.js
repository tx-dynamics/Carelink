import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';


const AgencyMenuPopUp = () => {
    return (
        <View>
            <View style={{ backgroundColor: "red" }}>
                <Text style={{ color: "red" }}>Hello world!</Text>
                <Menu>
                    <MenuTrigger text='Select action' />
                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                        <MenuOption onSelect={() => alert(`Delete`)} >
                            <Text style={{ color: 'red' }}>Delete</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                    </MenuOptions>
                </Menu>
            </View>
        </View>
    )
}

export default AgencyMenuPopUp

const styles = StyleSheet.create({})