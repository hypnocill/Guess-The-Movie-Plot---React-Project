import React 				from 'react';
import { Grid, Row, Col } 	from 'react-flexbox-grid/lib';

import HomeImages	from './Home/HomeImages';
import HomeBox 		from './Home/HomeBox';

export default class Home extends React.Component {
	render(){
		return(
			<Grid>
				<Row center="xs">
					<Col xs={12} sm={10} md={6} lg={10}>
						<HomeImages />
					</Col>
				</Row>
				<Row center="xs">
					<Col xs={12} sm={10} md={8} lg={6}>
						<HomeBox />
					</Col>
				</Row>
			</Grid>
		);
	}
};
