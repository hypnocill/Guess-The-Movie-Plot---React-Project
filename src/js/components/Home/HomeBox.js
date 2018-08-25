import React, {Component}	from 'react';
import { browserHistory }	from 'react-router'
import { connect }			from 'react-redux';
import RaisedButton			from 'material-ui/RaisedButton';
import Paper				from 'material-ui/Paper';
import { Grid, Row, Col }	from 'react-flexbox-grid/lib';

class HomeDialog extends Component {
	constructor( props )
	{
		super( props );
	}

	startPlay()
	{
		let { auth } = this.props;

		if( auth )
		{
			browserHistory.push( '/redirect' );
		}
		else
		{
			browserHistory.push( '/beforeplay' );
		}
	}

	render()
	{
		const paperStyle	= {
			'padding': '15px',
		}
		return (
			<div style={{'marginTop': '1em', 'marginBottom': '35px'}}>
				<Paper style={paperStyle} zDepth={1}>
					<h2 style={{'margin': '0px', 'marginBottom': '15px', 'fontWeight': 'normal'}}>Wanna Play a Game?</h2>
					<RaisedButton
						label="PLAY"
						secondary={true}
						onTouchTap={this.startPlay.bind(this)}
						/>
				</Paper>
			</div>
		);
	}
}

export default connect( ( state ) =>
	{
		return {
			auth: state.auth
		};
	}
)( HomeDialog );
