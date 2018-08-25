import React 				from 'react';
import { connect } 			from 'react-redux';
import { browserHistory }	from 'react-router';
import uuid 				from 'uuid';
import { Grid, Row, Col }	from 'react-flexbox-grid/lib';
import Paper 				from 'material-ui/Paper';
import RaisedButton 		from 'material-ui/RaisedButton';
import FlatButton 			from 'material-ui/RaisedButton';
import CircularProgress		from 'material-ui/CircularProgress';

import firebase,  {firebaseRef, FBprovider}	from '../firebase/firebase';
import LoginLogin							from './Login/LoginLogin';

class End extends React.Component {
	startPlay()
	{
		browserHistory.push( '/redirect' );
	}

	showStats()
	{
		browserHistory.push( '/stats' );
	}

	render()
	{
		let auth				= firebase.auth().currentUser;
		let { guessedMovies }	= this.props;

		let renderMovies = () =>
		{
			if( guessedMovies.length === 0 )
			{
				return (
					<h2>You Can Do Better!</h2>
				);
			}

			return guessedMovies.map( ( movie ) =>
				{
					return (
						<img key={uuid()} style={{'margin': '2.5px'}} height="150"	src={movie.posterURL} />
					);
				})
		};

		return(
			<Grid>
				<Row center="xs">
					<Col xs={12} sm={10} md={10}>
						<Paper style={{'padding': '15px', 'marginTop': '21px'}} zDepth={1}>
							{guessedMovies.length > 0 ? <h2>The Movies You Guessed:</h2> : null}
							{renderMovies()}
							<br />
							<RaisedButton label="PLAY AGAIN" secondary={true} onTouchTap={this.startPlay} />
							{auth ? <FlatButton style={{'marginLeft': '10px'}} label="My Profile" onTouchTap={this.showStats} /> : null}
							{!auth ? <div><h3 style={{'marginBottom': '0px'}}>Keep Record of your Score:</h3><LoginLogin /></div> : null}
						</Paper>
					</Col>
				</Row>
			</Grid>
		)
	}
};

export default connect( ( state ) =>
	{
		return {
			guessedMovies: state.guessedMovies
		};
	}
)( End );
