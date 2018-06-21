/**
 * All elements need to conform this interface
 */

import { ReactElement } from 'react'

interface UIElement {

    foo?: boolean

    render(): ReactElement<any>
}

export default UIElement