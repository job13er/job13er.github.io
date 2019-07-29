/** @flow */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card'

type Technology = {|
  icon?: any,
  name: string
|}

type JobProps = {|
  company: string,
  end: string | moment$moment,
  responsibilities: Array<string>,
  start: moment$Moment,
  technologies: Array<Technology>,
  title: string
|}

export default function Job({company, end, responsibilities, start, technologies, title}: JobProps) {
  const startStr = start.format('MMMM YYYY')
  const endStr = typeof end === 'string' ? end : end.format('MMMM YYYY')
  const range = `${startStr} - ${endStr}`

  const techStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 10,
    padding: 10
  }

  return (
    <Card style={{maxWidth: 600, width: '100%'}}>
      <Card.Header>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {company} ({range})
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <h6>Responsibilities</h6>
        <ul>
          {responsibilities.map(line => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <h6>Tools &amp; Technology</h6>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {technologies.map(tech => (
            <div className="card" key={tech.name} style={techStyle}>
              {tech.icon ? <FontAwesomeIcon icon={tech.icon} style={{marginRight: 10}} /> : null}
              <div>{tech.name}</div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}
