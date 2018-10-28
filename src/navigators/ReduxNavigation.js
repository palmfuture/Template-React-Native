import { BackHandler } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import React, { Component } from 'react';

import { AppNavigator } from './AppNavigator';
import * as NavActions from '../redux/actions/Navigation';

class ReduxNavigation extends Component {

	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}

	onBackPress = () => {
		const { nav, onBackPress } = this.props;
		if (nav.index === 0) return false;
		onBackPress();
		return true;
	}

	render() {
		return <AppNavigator />
	}
}

const mapStateToProps = state => ({ nav: state.nav });

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			...NavActions
		}, dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation);