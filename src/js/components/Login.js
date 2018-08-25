import React 								from 'react';
import {connect} 							from 'react-redux';
import firebase,  {firebaseRef, FBprovider} from '../firebase/firebase';
import { Grid, Row, Col }					from 'react-flexbox-grid/lib';
import Paper								from 'material-ui/Paper';

import * as actions	from '../actions/actions';
import LoginLogin 	from './Login/LoginLogin';
import LoginLogout 	from './Login/LoginLogout';

class Login extends React.Component {
	render(){
		let { auth } = this.props;

		return(
			<Grid>
				<Row center="xs">
					<Col xs={12} sm={10} md={8} lg={6}>
						<Paper style={{'padding': '15px', 'marginTop': '21px'}} zDepth={1}>
							{!auth ? <LoginLogin /> : <LoginLogout />}
						</Paper>
					</Col>
				</Row>
			</Grid>
		);
	}
};

export default connect( ( state ) =>
	{
		return {
			auth: state.auth
		};
	}
)( Login );
