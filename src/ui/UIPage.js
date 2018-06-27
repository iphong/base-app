import * as React from 'react'
import UISandbox from './UISandbox'
import Page from '../elements/Page'
import Body from '../elements/Body'

export default class UIPage extends React.Component {
	render() {
		return (
			<UISandbox name="PageFly Sandbox">
				<head>
					<title>Sandbox</title>
				</head>
				<body>
					<h3>Hello</h3>
				</body>
			</UISandbox>
		)
	}
}
