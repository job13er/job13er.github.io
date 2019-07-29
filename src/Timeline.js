/** @flow */
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

import './Timeline.css'

type TimelineEvent = {|
  date?: string,
  subtitle?: string,
  text?: string,
  title?: string,
  type: 'education' | 'work'
|}

type TimelineProps = {|
  events: Array<TimelineEvent>
|}

export default function Timeline({events}: TimelineProps) {
  return (
    <Jumbotron style={{width: '100%'}}>
      <VerticalTimeline style={{backgroundColor: 'rgb(257, 257, 257)'}}>
        {events.map((evt: TimelineEvent) => (
          <VerticalTimelineElement
            className={`vertical-timeline-element--${evt.type === 'work' ? 'red' : 'blue'}`}
            date={evt.date}
            icon={evt.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
            iconStyle={{background: evt.type === 'work' ? '#dc3545' : '#007bff', color: '#ffffff'}}
            key={evt.date}
          >
            {evt.title ? <h3 className="vertical-timeline-element-title">{evt.title}</h3> : null}
            {evt.subtitle ? <h4 className="vertical-timeline-element-subtitle">{evt.subtitle}</h4> : null}
            {evt.text ? <p>{evt.text}</p> : null}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Jumbotron>
  )
}
