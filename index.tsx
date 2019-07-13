import * as React from 'react'
import * as ReactDOM from 'react-dom'

class HelloWorld extends React.Component<{ name?: string }>{
	props = {
		name: 'World'
	}
	render() {
		const { name } = this.props
		return <div>Hello, {name}</div>
	}
}

function Main() {
	const props = { name: 'React' }
	return <HelloWorld {...props} />
}

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Main />, document.querySelector('#main')))