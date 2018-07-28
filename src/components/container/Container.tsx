import * as React from 'react';
import './Container.css';
import LeftCol from './leftCol/LeftCol';

class Container extends React.Component {
	constructor(props: object) {
		super(props);
		this.state = {

		};
	}

	// componentDidMount() {
	// 	console.log(this.props);
	// }

	render() {
		return (
			<div id="container">
                <LeftCol />
				<div className="right-col" />
			</div>
		);
	}
}

export default Container;
