/**
 * Webpack entry for main application
 *
 * @author: Phong Vu
 /  */
import { render } from 'react-dom'
import * as React from 'react'
import styled from 'styled-components'
import events from 'event-x'
import { Container, Subscribe } from 'container-x'

const container = (global.container = new Container({ foo: 'bar' }))

const Wrapper = styled.div`
	user-select: none;
	height: 70%;
	width: 70%;
	position: fixed;
	top: 0;
	left: 0;
	background: lightgray;

	&,
	* {
		outline: none;
	}
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
		outline: 2px solid black;
		pointer-events: none;
	}
`
const Foo = styled.div`
	background: grey;
`
const Wrapper2 = styled.div`
	color: ${props => (props.foo ? 'red' : 'green')};
	${Foo} {
		background: lightcoral;
	}
`
const Wrapper3 = Wrapper2.extend``

class App extends React.Component {
	componentDidMount() {
		events.on(this, 'foo', this.handleFoo)
	}
	handleFoo = () => {
		console.log('fdsfkskda glks')
	}
	handleDragStart = e => {
		const target = e.target
		e.dataTransfer.setDragImage(e.target, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
		setTimeout(() => {
			target.style.opacity = 0
			this.overlayRef.current.style.visibility = 'hidden'
		})
		// const id = e.target.getAttribute('id')
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
	handleDragEnd = e => {
		e.target.style.opacity = ''
		this.overlayRef.current.style.visibility = 'visible'
	}
	handleDrop = e => {
		e.preventDefault()
		const evt = e.nativeEvent
		const el = e.target.closest('.drag-btn')
		if (el) {
			console.log(el)
			const rect = el.getBoundingClientRect()
			console.log(rect.left, rect.top, rect.width, rect.height, evt.offsetX, evt.offsetY)
		}
		// console.log(e.dataTransfer.getData('application/json'))
	}
	handleFocus = e => {
		const el = e.target.closest('.drag-btn')
		// const el = e.target
		if (el) {
			const rect = el.getBoundingClientRect()
			Object.assign(this.overlayRef.current.style, {
				visibility: 'visible',
				top: rect.top + 'px',
				left: rect.left + 'px',
				width: rect.width + 'px',
				height: rect.height + 'px'
			})
		} else {
			Object.assign(this.overlayRef.current.style, {
				visibility: 'hidden'
			})
		}
	}
	handleChange = e => {
		console.log('change', e.nativeEvent)
	}
	overlayRef = React.createRef()

	render() {
		return (
			<Wrapper
				id="wrapper"
				onDragStartCapture={this.handleDragStart}
				onDragOverCapture={this.handleDragOver}
				onDragEndCapture={this.handleDragEnd}
				onDropCapture={this.handleDrop}
				onFocusCapture={this.handleFocus}
				onChange={this.handleChange}
				ref={el => (this.wrapper = el)}
				tabIndex={1}
			>
				<Foo>normal</Foo>
				<Wrapper2 foo>
					<Foo foo>foo</Foo>
				</Wrapper2>
				<Wrapper2 bar>bar</Wrapper2>
				<Wrapper3 foo>3 has foo</Wrapper3>
				<Wrapper3>3 no foo</Wrapper3>
				<Subscribe to={container} bind={['foo']}>
					{foo => {
						return <div>Foo {foo}</div>
					}}
				</Subscribe>
				<div id="overlay" ref={this.overlayRef} />
				This is a demo application
				<div id="a" className="drag-btn" tabIndex={1} draggable>
					Item 1
				</div>
				<div id="b" className="drag-btn" tabIndex={1} draggable>
					Item 2
				</div>
				<div className="drag-btn" tabIndex={1} draggable>
					<div id="c" className="drag-btn" tabIndex={1}>
						<span>
							<b>Item 3</b>
						</span>
					</div>
					<div id="d" className="drag-btn" tabIndex={1} draggable>
						Item 4
					</div>
				</div>
				<div className="drag-btn" tabIndex={1}>
					Item 2
					<input />
				</div>
			</Wrapper>
		)
	}
}

render(<App ref={el => (global.app = el)} />, document.getElementById('app'))

class A {
	foo = 'bar'
	static foo = 'bar'
	static name = 'fdsfds'

	static get bar() {
		return this
	}

	get bar() {}

	a() {}

	b() {}
}

global.A = A
global.events = events

const a = {}
const handler = (delay = 1000, msg = '') => () =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(msg)
		}, delay)
	})

events.on(a, 'foo', handler(1000, 'Task 1'))
events.on(a, 'foo', handler(3000, 'Task 2'))

console.time()
events.emit(a, 'foo').then((...args) => {
	console.timeEnd()
	console.log(...args)
})

// const elementsList = [
// 	{ type: 'Item1' },
// 	{ type: 'Item2' }
// ]
//
// const elements = {
// 	Item1: class Item1 extends React.Component {
// 		render() {
// 			return <li {...this.props}>Item 1</li>
// 		}
// 	},
// 	Item2: class Item2 extends React.Component {
// 		render() {
// 			return <li {...this.props}>Item 2</li>
// 		}
// 	}
// }
//
// class ElementsList extends React.Component {
// 	componentDidMount() {
// 		global.list = this
// 	}
// 	render() {
// 		return <ul>
// 			{elementsList.map((item, i) => {
// 				const Item = elements[item.type]
// 				return <Item key={i} {...item} />
// 			})}
// 			<button onClick={e => {
// 				elementsList.push({ type: 'Item1' })
// 				this.forceUpdate()
// 			}}>Add Element</button>
// 		</ul>
// 	}
// }
//
// render(<ElementsList />, document.getElementById('app'))
//
// global.elementList = elementsList
