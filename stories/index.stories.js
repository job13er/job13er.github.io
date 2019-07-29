import moment from 'moment'
import React from 'react'
import {
  faAdobe,
  faAws,
  faBitbucket,
  faBootstrap,
  faCss3,
  faEmber,
  faGithub,
  faGoogle,
  faHtml5,
  faJava,
  faJira,
  faJs,
  faLinux,
  faMicrosoft,
  faNodeJs,
  faNpm,
  faPython,
  faReact,
  faSlack,
  faYarn
} from '@fortawesome/free-brands-svg-icons'
import {storiesOf} from '@storybook/react'

import About from '../src/About'
import Job from '../src/Job'
import School from '../src/School'
import Timeline from '../src/Timeline'

storiesOf('About', module).add('me', () => (
  <About title="Adam Meadows">
    I love writing beautiful code to create beautiful user interfaces. I&apos;m happiest when I can also write RESTful
    APIs to enable user interfaces across multiple platforms. One of my favorite things to do though, is writing
    utilities to improve developer experience. I also have a passion for testing and automation.
  </About>
))

storiesOf('Experience', module)
  .add('Carium', () => (
    <Job
      company="Carium"
      end="Current"
      responsibilities={[
        'Building web interfaces with React',
        'Writing RESTful APIs using Python and Django',
        'Performing code reviews on JavaScript and Python pull requests',
        'Providing automation for continuous integration of multi-page-app web interface',
        'Developing a library to allow sharing translations of user-visible text across iOS, Android, and Web'
      ]}
      start={moment('2018-04-09')}
      technologies={[
        {icon: faJs, name: 'JavaScript'},
        {icon: faHtml5, name: 'HTML'},
        {icon: faCss3, name: 'CSS'},
        {icon: faReact, name: 'React'},
        {icon: faNpm, name: 'npm'},
        {icon: faYarn, name: 'Yarn'},
        {icon: faNodeJs, name: 'Node'},
        {icon: faPython, name: 'Python'},
        {name: 'Django'},
        {icon: faAws, name: 'AWS'},
        {icon: faGithub, name: 'GitHub'},
        {name: 'CircleCI'},
        {icon: faJira, name: 'Jira'},
        {icon: faSlack, name: 'Slack'}
      ]}
      title="Software Engineer"
    />
  ))
  .add('Ciena', () => (
    <Job
      company="Ciena"
      end={moment('2018-04-08')}
      responsibilities={[
        'Building web interfaces with Ember',
        'Performing code reviews on JavaScript pull requests',
        'Developing a widget library used by the rest of the team',
        'Providing automation for continuous integration and release of widget library'
      ]}
      start={moment('2015-08-25')}
      technologies={[
        {icon: faJs, name: 'JavaScript'},
        {icon: faHtml5, name: 'HTML'},
        {icon: faCss3, name: 'CSS'},
        {icon: faEmber, name: 'Ember'},
        {icon: faNpm, name: 'npm'},
        {icon: faYarn, name: 'Yarn'},
        {icon: faNodeJs, name: 'Node'},
        {icon: faBitbucket, name: 'Bitbucket'},
        {icon: faGithub, name: 'GitHub'},
        {name: 'TeamCity'},
        {name: 'TravisCI'},
        {icon: faJira, name: 'Jira'},
        {icon: faSlack, name: 'Slack'}
      ]}
      title="Software Engineer"
    />
  ))
  .add('Cyan', () => (
    <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>
      <Job
        company="Cyan, Inc."
        end={moment('2015-08-25')}
        responsibilities={[
          'Building re-usable web UI components for use by other web UI teams',
          'Consolidating UI work across multiple projects'
        ]}
        start={moment('2012-08-01')}
        technologies={[
          {icon: faJs, name: 'JavaScript'},
          {icon: faHtml5, name: 'HTML'},
          {icon: faCss3, name: 'CSS'},
          {name: 'Typescript'},
          {name: 'jQuery'},
          {icon: faBootstrap, name: 'Bootstrap'},
          {name: 'Backbone'},
          {icon: faReact, name: 'React'},
          {icon: faNpm, name: 'npm'},
          {icon: faYarn, name: 'Yarn'},
          {icon: faNodeJs, name: 'Node'},
          {icon: faBitbucket, name: 'Bitbucket'},
          {icon: faGithub, name: 'GitHub'},
          {name: 'TeamCity'},
          {name: 'TravisCI'},
          {icon: faJira, name: 'Jira'},
          {icon: faSlack, name: 'Slack'}
        ]}
        title="Sr. Software Engineer"
      />

      <Job
        company="Cyan, Inc."
        end={moment('2012-08-01')}
        responsibilities={[
          'Building a cloud-based network planning application using Google Web Toolkit (GWT)',
          'Architecting and implementing the web user interface for the network planning application',
          'Setting up automated testing for the web user interface',
          'Writing APIs in Python using Django to support the UI'
        ]}
        start={moment('2010-01-01')}
        technologies={[
          {icon: faJs, name: 'JavaScript'},
          {icon: faHtml5, name: 'HTML'},
          {icon: faCss3, name: 'CSS'},
          {icon: faGoogle, name: 'Google Web Toolkit'},
          {icon: faJava, name: 'Java'},
          {icon: faPython, name: 'Python'},
          {name: 'Django'},
          {name: 'SVN'},
          {icon: faBitbucket, name: 'Bitbucket'},
          {icon: faGithub, name: 'GitHub'},
          {name: 'TeamCity'},
          {icon: faJira, name: 'Jira'}
        ]}
        title="Software Engineer"
      />
    </div>
  ))
  .add('Cultivate', () => (
    <Job
      company="Cultivate Systems"
      end={moment('2010-01-01')}
      responsibilities={[
        'Writing SQL queries to support boutique winery e-commerce system',
        'Modifying HTML/CSS to make custom e-commerce sites match main sites of customers',
        'Customizing HTML emails to match branding of customers',
        'Renewing and installin SSL certificates on Microsof IIS servers '
      ]}
      start={moment('2009-03-01')}
      technologies={[
        {icon: faHtml5, name: 'HTML'},
        {icon: faCss3, name: 'CSS'},
        {icon: faAdobe, name: 'ColdFusion'},
        {name: 'SQL'},
        {icon: faMicrosoft, name: 'Microsoft IIS'}
      ]}
      title="Application Developer"
    />
  ))
  .add('Threshold', () => (
    <Job
      company="Threshold Corporation"
      end={moment('2009-02-01')}
      responsibilities={[
        'Designing/implementing a remote upgrade procedure for an embedded home network controller device',
        'Designing/implementing a web-based user interface for configuring devices connected via low power wireless',
        'Assisting in the design of an open-source low power wireless communication prototol ONE-NET',
        'Setting up proper source control systems/procedures'
      ]}
      start={moment('2006-07-01')}
      technologies={[{icon: faLinux, name: 'Linux'}, {name: 'Embedded systems'}, {icon: faAdobe, name: 'Flex'}]}
      title="Software Engineer"
    />
  ))

storiesOf('Education', module).add('UCR', () => (
  <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>
    <School
      degree="M.S."
      end="2006"
      gpa="3.8/4.0"
      major="Computer Science"
      name="University of California, Riverside"
      start="2004"
    />

    <School
      degree="B.S."
      end="2004"
      gpa="3.6/4.0"
      major="Computer Science"
      name="University of California, Riverside"
      start="2000"
    />
  </div>
))

storiesOf('Timeline', module).add('Professional', () => (
  <Timeline
    events={[
      {
        date: 'April 2018 - present',
        subtitle: 'Software Engineer',
        text: 'Carium',
        type: 'work'
      },
      {
        date: 'August 2015 - April 2018',
        subtitle: 'Software Engineer',
        text: 'Ciena',
        type: 'work'
      },
      {
        date: 'August 2015',
        subtitle: 'Acquisition',
        text: 'Cyan, Inc. is acquired by Ciena',
        type: 'work'
      },
      {
        date: 'August 2012 - August 2015',
        subtitle: 'Sr. Software Engineer',
        text: 'Cyan, Inc.',
        type: 'work'
      },
      {
        date: 'August 2012',
        subtitle: 'Promoted to Sr. Software Engineer',
        text: 'Cyan, Inc.',
        type: 'work'
      },
      {
        date: 'January 2010 - August 2012',
        subtitle: 'Software Engineer',
        text: 'Cyan, Inc.',
        type: 'work'
      },
      {
        date: 'March 2009 - December 2009',
        subtitle: 'Application Developer',
        text: 'Cultivate Systems',
        type: 'work'
      },
      {
        date: 'July 2006 - February 2009',
        subtitle: 'Software Engineer',
        text: 'Threshold Corporation',
        type: 'work'
      },
      {
        date: 'June 2006',
        subtitle: 'M.S. Computer Science',
        text: 'University of California, Riverside',
        type: 'education'
      },
      {
        date: 'June 2004',
        text: 'University of California, Riverside',
        subtitle: 'B.S. Computer Science',
        type: 'education'
      }
    ]}
  />
))
