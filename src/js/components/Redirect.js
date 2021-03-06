import React, {Component} 	from 'react';
import { browserHistory } 	from 'react-router';
import { connect } 			from 'react-redux';
import { Grid, Row, Col }	from 'react-flexbox-grid/lib';

import * as actions	from '../actions/actions';
import themeStyle 	from '../theme/themeStyle.js';
import Paper 		from 'material-ui/Paper';


class Redirect extends Component {
	componentDidMount()
	{
		setTimeout( () => this.props.dispatch( actions.decrement() ), 1000 );
	}

	componentDidUpdate()
	{
		let { dispatch, countDown }	= this.props;
		if( countDown <= 0 )
		{
			browserHistory.push( '/play' );
			dispatch( actions.resetCountDown() );
		}
		else
		{
			setTimeout( () =>
				{
					dispatch( actions.decrement() )
				},
				1000
			);
		}
	}

	render() {
		let { countDown } = this.props;
		return (
			<Grid>
				<Row center="xs">
					<Col xs={10} sm={6}>
						<h1>Get Ready!</h1><br />
						<h1 style={{'fontWeight': '300', 'margin': '0px',
							'fontSize': '12rem', 'color': themeStyle.palette.accent1Color}}>{countDown}</h1>
					</Col>
				</Row>
			</Grid>
		);
	}
};

export default connect(
	(state) => {
		return {
			countDown: state.countDown
		};
	}
)(Redirect);
