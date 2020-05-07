import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import Colors from '../../styles/Colors'


const CustomHeaderButton = props => {
    return <HeaderButton {...props} IconComponent={MaterialCommunityIcons} iconSize={23} color={Colors.secondary} />
}

export default CustomHeaderButton;