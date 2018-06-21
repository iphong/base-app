/**
 * Webpack entry for main application
 *
 * @author: Phong Vu
 */

import { render } from 'react-dom'
import * as React from 'react'
import Example from 'elements/Example'

render(
	<div>
		This is a demo application
		<Example />
	</div>,
	document.getElementById('app')
)
