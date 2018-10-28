import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class Icons extends Component {

    static propTypes = {
        type: PropTypes.string.isRequired,
    }

    findIcon = () => {
        const { user, type } = this.props;
        if (type === 'profile') {
            if (user && !user.token) return 'account-circle';
            else return 'logout-variant'
        }
        return type;
    }

    render() {
        return (
            <View style={{ paddingLeft: 0, paddingRight: 15 }}>
                <Icon name={this.findIcon()} type='material-community' color='#FF5766' size={32} />
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Icons);