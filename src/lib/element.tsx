import UIElement from '../interfaces/UIElement'
import * as React from 'react'

/**
 *
 * @param {UIElement} target
 * @return {Promise<UIElement>}
 */
export async function getParent(target: UIElement): Promise<UIElement> {
	// Do whatever shit to find its parent
	return null
}

export async function removeElement(target: UIElement): Promise<boolean> {
	// Do whatever shit to remove element
	return true
}

type data = {
	id: string,
	type: string,
	children: [number],
	style: {},
	data: {}
}
const store = [
	{
		id: '13124', type: 'Example', data: {foo: 'bar'}
	}
]
const createElement = (settings) => (Element) => {

	return class ElementWrapper extends React.Component {

		render() {
			const data = store[0]
			return <div></div>
		}
	}
}
