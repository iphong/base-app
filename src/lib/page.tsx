import UIElement from '../interfaces/UIElement'
import { ReactElement } from 'react'

export function renderChildren(element:UIElement) {
    return element.props.children
}