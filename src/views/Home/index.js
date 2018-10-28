import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

import styles from '../../assets/styles';

class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <Text style={[styles.fontWeightBold, styles.display5, { paddingLeft: 15 }]}>Back</Text>,
            headerTitle: <Text style={[styles.fontWeightBold, styles.display5, styles.textCenter, { width: '100%' }]}>Home</Text>,
            headerRight: <Text style={[styles.fontWeightBold, styles.display5, { paddingRight: 15 }]}>Next</Text>,
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
            <View>
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