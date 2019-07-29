/** @flow */
import React, {type Node} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

type AboutProps = {|
  children: Node,
  title: string
|}

export default function About({children, title}: AboutProps) {
  return (
    <Jumbotron>
      <h1>{title}</h1>
      <p>{children}</p>
    </Jumbotron>
  )
}
