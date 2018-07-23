import * as React from 'react';
import './Container.css';

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
				<div className="left-col" />
				<div className="right-col" />
			</div>
		);
	}
}

export default Container;
