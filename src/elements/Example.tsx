import * as React from "react";
import UIElement from "../interfaces/UIElement";

/**
 * Requirements
 * - Convert props to state
 * - spread extra props
 * - render return styled component
 * - declare static assets in class
 * -
 */

interface Data {
	content?: string;
}

export default class Example extends React.Component<Data, Data>
	implements UIElement {
	static defaultProps = {};

	state = this.props;

	handleClick = (e: any) => {
		this.setState({
			content: "New Content"
		});
	};

	render() {
		return <div onClick={this.handleClick}>{this.state.content}</div>;
	}
}
