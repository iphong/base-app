import React = require('react')

class Foo<Props> implements A<Props>, B {
	a = 'A'
	b = 'B'
	x: 10
	y: 10
	props: Props
}
class Bar extends Foo<React.ReactNode> {
	props = React.createElement('div')
}
export default new Foo()

