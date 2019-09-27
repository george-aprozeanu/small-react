import * as React from 'react';
import {render} from 'react-dom';

const HelloWorld = ({name} = {name: 'World'}) => <h1>Hello, {name}</h1>;

render(<HelloWorld name="React"/>, document.getElementById('main'));
