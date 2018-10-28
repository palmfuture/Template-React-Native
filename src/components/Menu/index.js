import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card, CardItem } from 'native-base';

import styles from '../../assets/styles';

export default class Menu extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }

    render() {
        return (
            <Card style={[styles.container, styles.rounded, { justifyContent: 'flex-start', paddingTop: 20, width: '90%' }]} transparent>
                <CardItem style={{
                    paddingTop: 20, paddingBottom: 5, borderRadius: 23, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 9,
                    elevation: 3,
                }}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 6, alignItems: 'flex-start' }}>
                            <Text style={[styles.textBlack, styles.fontWeightBold, styles.display5]}>{this.props.title}</Text>
                            <Text style={[styles.textBlack, styles.display6, { opacity: 0.7 }]}>{this.props.desc}</Text>
                        </View>
                        <View style={{ flex: 3, alignItems: 'flex-end' }}>
                            <Icon name={this.props.icon} type='material-community' size={100} color={this.props.color} underlayColor='transparent' />
                        </View>
                    </TouchableOpacity>
                </CardItem>
            </Card>
        )
    }
}
