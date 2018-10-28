import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import {
    View,
    Text,
    ImageBackground
} from 'react-native';

import { Icons } from '../../components';

import styles from '../../assets/styles';
import background from '../../assets/bg2.png';

class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <View style={{ paddingLeft: 15 }}><Text style={[styles.fontWeightBold, styles.display5, styles.textCenter, { width: '100%', color: '#FF5766' }]} >KING DRAG APP</Text ></View>,
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
        const { navigation } = this.props;
        return (
            <View style={[styles.container]}>
                <ImageBackground
                    source={background}
                    style={[styles.backDrop]}
                >
                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);