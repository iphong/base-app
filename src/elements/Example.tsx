import * as React from 'react'
import UIElement from "../interfaces/UIElement";

interface Data {
    content?: string
}

export default class Example
    extends React.Component<Data, Data>
    implements UIElement
{
    static defaultProps = {}

    state: Data = {  }

    handleClick = (e: any) => {
        this.setState({
            content: 'New Content'
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.content}
            </div>
        )
    }
}
