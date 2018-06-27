/**
 * All elements need to conform this interface
 */

import { ReactElement } from 'react'

interface UIElement {

    foo?: boolean

    props: {
        children?: any
    }

    state: {}

    render(): ReactElement<any>
}

export default UIElement