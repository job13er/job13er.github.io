import React from 'react'
import {addDecorator, configure} from '@storybook/react'

const decoratorStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: 40
}
addDecorator(storyFn => <div style={decoratorStyle}>{storyFn()}</div>)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
