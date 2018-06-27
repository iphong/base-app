/**
 * Webpack entry for main application
 *
 * @author: Phong Vu
 /  */
import { render } from 'react-dom'
import * as React from 'react'
import UIPage from './ui/UIPage'
import styled from 'styled-components'

const Wrapper = styled.div`
	.drag-btn {
		padding: 5px;
		background: red;
		margin: 5px;
	}
	.drag-btn > .drag-btn {
		background: aqua;
		display: inline-block;
	}
	#overlay {
		position: absolute;
		background: rgba(0,0,0,0.76);
		pointer-events: none;
	}
`

class App extends React.Component {
	handleDragStart = e => {
		const id = e.target.getAttribute('id')

		// e.dataTransfer.setData('DownloadURL', `application/json:text:` + window.URL.createObjectURL(
		// 	new Blob(['{"type": "Heading", id: 10}'], {
		// 		type: 'application/json'
		// 	})
		// ))
		// e.dataTransfer.setData('application/json', '{"type": "Heading", id: 10}')
		// e.dataTransfer.setData('pagefly/element', '10')
	}
	handleDragOver = e => {
		e.preventDefault()
		// const rect = e.target.getBoundingClientRect()
		// console.log(rect, e.offsetX, e.offsetY)
		// console.log(e.dataTransfer.getData('plain/text'))
	}
	handleDrop = e => {
		e.preventDefault()
		const evt = e.nativeEvent
		const el = e.nativeEvent.path.find(el => (el.dataset.element == 1))
		if (el) {
			console.log(el)
			const rect = el.getBoundingClientRect()
			console.log(rect.left, rect.top, rect.width, rect.height, evt.pageX, evt.pageY)
		}
		// console.log(e.dataTransfer.getData('application/json'))
	}
	handleClick = e => {
		e.stopPropagation()
		const evt = e.nativeEvent
		const el = e.nativeEvent.path.find(el => (el.matches('.drag-btn')))
		if (el) {
			console.log(el)
			const rect = el.getBoundingClientRect()
			this.overlayRef.current.style.top = rect.top + 'px'
			this.overlayRef.current.style.left = rect.left + 'px'
			this.overlayRef.current.style.width= rect.width + 'px'
			this.overlayRef.current.style.height= rect.height + 'px'
		}
	}
	overlayRef = React.createRef()
	render() {
		return (
			<Wrapper
				onDragStartCapture={this.handleDragStart}
				onDragOverCapture={this.handleDragOver}
				onDropCapture={this.handleDrop}
				onClickCapture={this.handleClick}
			>
				<div id="overlay" ref={this.overlayRef}></div>
				This is a demo application
				<div id="a" className="drag-btn" draggable>
					Item 1
				</div>
				<div id="b" className="drag-btn" draggable>
					Item 2
				</div>
				<div data-element="1" className="drag-btn" draggable>
					<div data-element="1" id="c" className="drag-btn"
					     onClick={e => {
						     console.log('btn clicked')
					     }}
					>
						<span>
							<b>Item 3</b>
						</span>
					</div>
					<div id="d" className="drag-btn" draggable>
						Item 4
					</div>
				</div>
				<div className="drag-btn">
					Item 2
				</div>
			</Wrapper>
		)
	}
}

render(<App/>, document.getElementById('app'))

class A {
	foo = 'bar'
	static foo = 'bar'
	static name = 'fdsfds'
	static get bar() {
		return this
	}
	get bar() {
	}
	a() {
	}
	b() {
	}
}

global.A = A
