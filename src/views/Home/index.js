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
            headerTitle: <Text style={[styles.fontWeightBold, styles.display5]}>Home</Text>,
            headerTransparent: false,
            headerStyle: {
                borderBottomWidth: 0,
                marginLeft: 15,
                marginRight: 15
            },
            headerLeft: <Text style={[styles.fontWeightBold, styles.display5]}>Back</Text>,
            headerRight: <Text style={[styles.fontWeightBold, styles.display5]}>Next</Text>
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