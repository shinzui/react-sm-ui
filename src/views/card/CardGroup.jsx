import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import Card from './Card'

export default class CardGroup extends Component {

  static propTypes = {
    children: (props, propName, componentName) => {
      const prop = props[propName]

      if(Array.isArray(prop)) {
        if(prop.some( p => p.type !== Card)) {
          return new Error(`${componentName} should only have Card as children`)
        }
      } else {
        if(prop.type !== Card) {
          return new Error(`${componentName} should only have Card as children`)
        }
      }
    }
  }

  render() {
    const { className, children } = this.props
    const classes = classNames('ui', 'cards', className)

    return (
      <div className={classes}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { grouped: true})
        })}
      </div>
    )
  }
}
