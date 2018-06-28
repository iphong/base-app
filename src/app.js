import * as React from 'react'

const elementsList = [
	{ type: 'Item1' }
]

class ElementsList extends React.Component {
	render() {
		return elementsList.map(item => {
			return <div {...item} />
		})
	}
}

global.elementList = elementsList