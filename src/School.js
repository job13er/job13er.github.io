/** @flow */
import React from 'react'
import Card from 'react-bootstrap/Card'

type SchoolProps = {|
  degree: string,
  end: string,
  gpa: string,
  major: string,
  name: string,
  start: string
|}

export default function School({degree, end, gpa, major, name, start}: SchoolProps) {
  const range = `${start} - ${end}`

  return (
    <Card style={{maxWidth: 600, width: '100%'}}>
      <Card.Header>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {name} ({range})
      </Card.Header>

      <Card.Body>
        <Card.Title>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          {degree} {major}
        </Card.Title>

        <Card.Text>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          GPA: {gpa}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
