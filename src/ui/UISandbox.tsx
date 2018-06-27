import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ComponentState, RefObject } from 'react'

export default class UISandbox extends React.Component<{
    name: string
}, {
    root: HTMLElement
}> {
    state = { root: null }
    frameEl: RefObject<any> = React.createRef()
    componentDidMount() {
        this.frameEl.current.addEventListener('load', this.onLoad, true)
    }
    componentWillUnmount() {
        this.frameEl.current.removeEventListener('load', this.onLoad, true)
    }
    onLoad = () => {
        this.frameEl.current.contentDocument.write('<html>')
        const root = this.frameEl.current.contentDocument.querySelector('html')
        this.setState({ root })
    }
    render() {
        return <iframe name={this.props.name} srcDoc="<html>" ref={this.frameEl}>
            {this.state.root ? ReactDOM.createPortal(this.props.children, this.state.root) : null}
        </iframe>
    }
}