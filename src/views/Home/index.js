import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import {
    View,
    Text,
    ImageBackground,
    ScrollView,
} from 'react-native';

import { Icons, Menu } from '../../components';

import styles from '../../assets/styles';
import background from '../../assets/bg2.png';

class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <View style={{ paddingLeft: 15 }}><Text style={[styles.fontWeightBold, styles.display5, styles.textCenter, { width: '100%', color: '#FF5766' }]} >KING DRAG</Text ></View>,
            headerTitle: <Text style={[styles.fontWeightBold, styles.display5, styles.textCenter, { width: '100%' }]} ></Text >,
            headerRight: <Fragment><Icons type='cart' /><Icons type='profile' /></Fragment>,
            headerTransparent: false,
            style: {
                flex: 1,
            },
            headerStyle: {
                borderBottomWidth: 0,
            }
        }
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    render() {
        const { navigation, user } = this.props;
        return (
            <ImageBackground
                source={background}
                style={[styles.backDrop]}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={[{ alignItems: 'center' }]}>
                        <Menu
                            title='กลุ่มสินค้า'
                            desc='เมนูการค้นหาสินค้าจากรายการสินค้า'
                            color='#f0a016'
                            icon='magnify'
                        />
                        <Menu
                            title='สินค้า'
                            desc='เมนูการค้นหาสินค้าจากชื่อสินค้า'
                            color='#ff7857'
                            icon='package-variant-closed'
                        />
                        <Menu
                            title='ประวัติการสั่งซื้อ'
                            desc='เมนูการค้นหาประวัติการสั่งซื้อสินค้า'
                            color='#FF5766'
                            icon='history'
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);