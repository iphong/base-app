import * as React from 'react'
import { Component } from 'react'
import UIElement from '../interfaces/UIElement'
import { renderChildren } from '../lib/page'

export default class Page extends Component implements UIElement {
	render() {
		return (
			<div>
				{renderChildren(this)}
			</div>
		)
	}
}