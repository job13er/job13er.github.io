;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    146: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return School
      })
      __webpack_require__(24), __webpack_require__(76)
      var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),
        react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23),
        react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__
        )
      function School(_ref) {
        var degree = _ref.degree,
          end = _ref.end,
          gpa = _ref.gpa,
          major = _ref.major,
          name = _ref.name,
          start = _ref.start,
          range = ''.concat(start, ' - ').concat(end)
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default.a,
          {style: {maxWidth: 600, width: '100%'}},
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default.a.Header,
            null,
            name,
            ' (',
            range,
            ')'
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default.a.Body,
            null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default.a.Title,
              null,
              degree,
              ' ',
              major
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3___default.a.Text,
              null,
              'GPA: ',
              gpa
            )
          )
        )
      }
      ;(School.displayName = 'School'),
        (School.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'School',
          props: {
            degree: {required: !0, flowType: {name: 'string'}, description: ''},
            end: {required: !0, flowType: {name: 'string'}, description: ''},
            gpa: {required: !0, flowType: {name: 'string'}, description: ''},
            major: {required: !0, flowType: {name: 'string'}, description: ''},
            name: {required: !0, flowType: {name: 'string'}, description: ''},
            start: {required: !0, flowType: {name: 'string'}, description: ''}
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/School.js'] = {
            name: 'School',
            docgenInfo: School.__docgenInfo,
            path: 'src/School.js'
          })
    },
    372: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return About
      })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
        react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107),
        react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1__
        )
      function About(_ref) {
        var children = _ref.children,
          title = _ref.title
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_1___default.a,
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('h1', null, title),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, children)
        )
      }
      ;(About.displayName = 'About'),
        (About.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'About',
          props: {
            children: {required: !0, flowType: {name: 'Node'}, description: ''},
            title: {required: !0, flowType: {name: 'string'}, description: ''}
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/About.js'] = {
            name: 'About',
            docgenInfo: About.__docgenInfo,
            path: 'src/About.js'
          })
    },
    374: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Timeline
      })
      __webpack_require__(74)
      var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377),
        _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_1__
        ),
        _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(375),
        _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_2__
        ),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),
        react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(147),
        react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_require__(660), __webpack_require__(107)),
        react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_6__
        ),
        _ref2 =
          (__webpack_require__(663),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_2___default.a,
            null
          )),
        _ref3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_1___default.a,
          null
        )
      function Timeline(_ref) {
        var events = _ref.events
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_6___default.a,
          {style: {width: '100%'}},
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_4__.VerticalTimeline,
            {style: {backgroundColor: 'rgb(257, 257, 257)'}},
            events.map(function(evt) {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_4__.VerticalTimelineElement,
                {
                  className: 'vertical-timeline-element--'.concat('work' === evt.type ? 'red' : 'blue'),
                  date: evt.date,
                  icon: 'work' === evt.type ? _ref2 : _ref3,
                  iconStyle: {background: 'work' === evt.type ? '#dc3545' : '#007bff', color: '#ffffff'},
                  key: evt.date
                },
                evt.title
                  ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                      'h3',
                      {className: 'vertical-timeline-element-title'},
                      evt.title
                    )
                  : null,
                evt.subtitle
                  ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                      'h4',
                      {className: 'vertical-timeline-element-subtitle'},
                      evt.subtitle
                    )
                  : null,
                evt.text ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('p', null, evt.text) : null
              )
            })
          )
        )
      }
      ;(Timeline.displayName = 'Timeline'),
        (Timeline.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Timeline',
          props: {
            events: {
              required: !0,
              flowType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw:
                      "{|\n  date?: string,\n  subtitle?: string,\n  text?: string,\n  title?: string,\n  type: 'education' | 'work'\n|}",
                    signature: {
                      properties: [
                        {key: 'date', value: {name: 'string', required: !1}},
                        {key: 'subtitle', value: {name: 'string', required: !1}},
                        {key: 'text', value: {name: 'string', required: !1}},
                        {key: 'title', value: {name: 'string', required: !1}},
                        {
                          key: 'type',
                          value: {
                            name: 'union',
                            raw: "'education' | 'work'",
                            elements: [{name: 'literal', value: "'education'"}, {name: 'literal', value: "'work'"}],
                            required: !0
                          }
                        }
                      ]
                    }
                  }
                ],
                raw: 'Array<TimelineEvent>'
              },
              description: ''
            }
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Timeline.js'] = {
            name: 'Timeline',
            docgenInfo: Timeline.__docgenInfo,
            path: 'src/Timeline.js'
          })
    },
    379: function(module, exports, __webpack_require__) {
      __webpack_require__(380), __webpack_require__(483), (module.exports = __webpack_require__(484))
    },
    484: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(36),
            __webpack_require__(32),
            __webpack_require__(31),
            __webpack_require__(37),
            __webpack_require__(38)
          var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1),
            react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
            _storybook_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41),
            decoratorStyle = {alignItems: 'center', display: 'flex', justifyContent: 'center', padding: 40}
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(function(storyFn) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', {style: decoratorStyle}, storyFn())
          })
          var req = __webpack_require__(644)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.configure)(function loadStories() {
            req.keys().forEach(function(filename) {
              return req(filename)
            })
          }, module)
        }.call(this, __webpack_require__(179)(module))
    },
    52: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Job
      })
      __webpack_require__(24), __webpack_require__(74), __webpack_require__(76)
      var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(373),
        react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),
        react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23),
        react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__
        ),
        _ref2 = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('h6', null, 'Responsibilities'),
        _ref3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('h6', null, 'Tools & Technology')
      function Job(_ref) {
        var company = _ref.company,
          end = _ref.end,
          responsibilities = _ref.responsibilities,
          start = _ref.start,
          technologies = _ref.technologies,
          title = _ref.title,
          startStr = start.format('MMMM YYYY'),
          endStr = 'string' == typeof end ? end : end.format('MMMM YYYY'),
          range = ''.concat(startStr, ' - ').concat(endStr),
          techStyle = {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10,
            marginRight: 10,
            padding: 10
          }
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a,
          {style: {maxWidth: 600, width: '100%'}},
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
            null,
            company,
            ' (',
            range,
            ')'
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a.Body,
            null,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a.Title,
              null,
              title
            ),
            _ref2,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'ul',
              null,
              responsibilities.map(function(line) {
                return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('li', {key: line}, line)
              })
            ),
            _ref3,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'div',
              {style: {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}},
              technologies.map(function(tech) {
                return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  'div',
                  {className: 'card', key: tech.name, style: techStyle},
                  tech.icon
                    ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.a,
                        {icon: tech.icon, style: {marginRight: 10}}
                      )
                    : null,
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('div', null, tech.name)
                )
              })
            )
          )
        )
      }
      ;(Job.displayName = 'Job'),
        (Job.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Job',
          props: {
            company: {required: !0, flowType: {name: 'string'}, description: ''},
            end: {
              required: !0,
              flowType: {
                name: 'union',
                raw: 'string | moment$moment',
                elements: [{name: 'string'}, {name: 'moment$moment'}]
              },
              description: ''
            },
            responsibilities: {
              required: !0,
              flowType: {name: 'Array', elements: [{name: 'string'}], raw: 'Array<string>'},
              description: ''
            },
            start: {required: !0, flowType: {name: 'moment$Moment'}, description: ''},
            technologies: {
              required: !0,
              flowType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{|\n  icon?: any,\n  name: string\n|}',
                    signature: {
                      properties: [
                        {key: 'icon', value: {name: 'any', required: !1}},
                        {key: 'name', value: {name: 'string', required: !0}}
                      ]
                    }
                  }
                ],
                raw: 'Array<Technology>'
              },
              description: ''
            },
            title: {required: !0, flowType: {name: 'string'}, description: ''}
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Job.js'] = {name: 'Job', docgenInfo: Job.__docgenInfo, path: 'src/Job.js'})
    },
    644: function(module, exports, __webpack_require__) {
      var map = {'./index.stories.js': 645}
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 644)
    },
    645: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(__webpack_exports__, 'withStorySource', function() {
            return withStorySource
          }),
            __webpack_require__.d(__webpack_exports__, '__STORY__', function() {
              return __STORY__
            }),
            __webpack_require__.d(__webpack_exports__, '__ADDS_MAP__', function() {
              return __ADDS_MAP__
            })
          var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            moment__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),
            _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2),
            _storybook_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41),
            _src_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(372),
            _src_Job__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52),
            _src_School__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(146),
            _src_Timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(374),
            withStorySource = __webpack_require__(646).withStorySource,
            __STORY__ =
              "import moment from 'moment'\nimport React from 'react'\nimport {\n  faAdobe,\n  faAws,\n  faBitbucket,\n  faBootstrap,\n  faCss3,\n  faEmber,\n  faGithub,\n  faGoogle,\n  faHtml5,\n  faJava,\n  faJira,\n  faJs,\n  faLinux,\n  faMicrosoft,\n  faNodeJs,\n  faNpm,\n  faPython,\n  faReact,\n  faSlack,\n  faYarn\n} from '@fortawesome/free-brands-svg-icons'\nimport {storiesOf} from '@storybook/react'\n\nimport About from '../src/About'\nimport Job from '../src/Job'\nimport School from '../src/School'\nimport Timeline from '../src/Timeline'\n\nstoriesOf('About', module).add('me', () => (\n  <About title=\"Adam Meadows\">\n    I love writing beautiful code to create beautiful user interfaces. I&apos;m happiest when I can also write RESTful\n    APIs to enable user interfaces across multiple platforms. One of my favorite things to do though, is writing\n    utilities to improve developer experience. I also have a passion for testing and automation.\n  </About>\n))\n\nstoriesOf('Experience', module)\n  .add('Carium', () => (\n    <Job\n      company=\"Carium\"\n      end=\"Current\"\n      responsibilities={[\n        'Building web interfaces with React',\n        'Writing RESTful APIs using Python and Django',\n        'Performing code reviews on JavaScript and Python pull requests',\n        'Providing automation for continuous integration of multi-page-app web interface',\n        'Developing a library to allow sharing translations of user-visible text across iOS, Android, and Web'\n      ]}\n      start={moment('2018-04-09')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faReact, name: 'React'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faPython, name: 'Python'},\n        {name: 'Django'},\n        {icon: faAws, name: 'AWS'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'CircleCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Ciena', () => (\n    <Job\n      company=\"Ciena\"\n      end={moment('2018-04-08')}\n      responsibilities={[\n        'Building web interfaces with Ember',\n        'Performing code reviews on JavaScript pull requests',\n        'Developing a widget library used by the rest of the team',\n        'Providing automation for continuous integration and release of widget library'\n      ]}\n      start={moment('2015-08-25')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faEmber, name: 'Ember'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faBitbucket, name: 'Bitbucket'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'TeamCity'},\n        {name: 'TravisCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Cyan', () => (\n    <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2015-08-25')}\n        responsibilities={[\n          'Building re-usable web UI components for use by other web UI teams',\n          'Consolidating UI work across multiple projects'\n        ]}\n        start={moment('2012-08-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {name: 'Typescript'},\n          {name: 'jQuery'},\n          {icon: faBootstrap, name: 'Bootstrap'},\n          {name: 'Backbone'},\n          {icon: faReact, name: 'React'},\n          {icon: faNpm, name: 'npm'},\n          {icon: faYarn, name: 'Yarn'},\n          {icon: faNodeJs, name: 'Node'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {name: 'TravisCI'},\n          {icon: faJira, name: 'Jira'},\n          {icon: faSlack, name: 'Slack'}\n        ]}\n        title=\"Sr. Software Engineer\"\n      />\n\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2012-08-01')}\n        responsibilities={[\n          'Building a cloud-based network planning application using Google Web Toolkit (GWT)',\n          'Architecting and implementing the web user interface for the network planning application',\n          'Setting up automated testing for the web user interface',\n          'Writing APIs in Python using Django to support the UI'\n        ]}\n        start={moment('2010-01-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {icon: faGoogle, name: 'Google Web Toolkit'},\n          {icon: faJava, name: 'Java'},\n          {icon: faPython, name: 'Python'},\n          {name: 'Django'},\n          {name: 'SVN'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {icon: faJira, name: 'Jira'}\n        ]}\n        title=\"Software Engineer\"\n      />\n    </div>\n  ))\n  .add('Cultivate', () => (\n    <Job\n      company=\"Cultivate Systems\"\n      end={moment('2010-01-01')}\n      responsibilities={[\n        'Writing SQL queries to support boutique winery e-commerce system',\n        'Modifying HTML/CSS to make custom e-commerce sites match main sites of customers',\n        'Customizing HTML emails to match branding of customers',\n        'Renewing and installin SSL certificates on Microsof IIS servers '\n      ]}\n      start={moment('2009-03-01')}\n      technologies={[\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faAdobe, name: 'ColdFusion'},\n        {name: 'SQL'},\n        {icon: faMicrosoft, name: 'Microsoft IIS'}\n      ]}\n      title=\"Application Developer\"\n    />\n  ))\n  .add('Threshold', () => (\n    <Job\n      company=\"Threshold Corporation\"\n      end={moment('2009-02-01')}\n      responsibilities={[\n        'Designing/implementing a remote upgrade procedure for an embedded home network controller device',\n        'Designing/implementing a web-based user interface for configuring devices connected via low power wireless',\n        'Assisting in the design of an open-source low power wireless communication prototol ONE-NET',\n        'Setting up proper source control systems/procedures'\n      ]}\n      start={moment('2006-07-01')}\n      technologies={[{icon: faLinux, name: 'Linux'}, {name: 'Embedded systems'}, {icon: faAdobe, name: 'Flex'}]}\n      title=\"Software Engineer\"\n    />\n  ))\n\nstoriesOf('Education', module).add('UCR', () => (\n  <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n    <School\n      degree=\"M.S.\"\n      end=\"2006\"\n      gpa=\"3.8/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2004\"\n    />\n\n    <School\n      degree=\"B.S.\"\n      end=\"2004\"\n      gpa=\"3.6/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2000\"\n    />\n  </div>\n))\n\nstoriesOf('Timeline', module).add('Professional', () => (\n  <Timeline\n    events={[\n      {\n        date: 'April 2018 - present',\n        subtitle: 'Software Engineer',\n        text: 'Carium',\n        type: 'work'\n      },\n      {\n        date: 'August 2015 - April 2018',\n        subtitle: 'Software Engineer',\n        text: 'Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2015',\n        subtitle: 'Acquisition',\n        text: 'Cyan, Inc. is acquired by Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2012 - August 2015',\n        subtitle: 'Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'August 2012',\n        subtitle: 'Promoted to Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'January 2010 - August 2012',\n        subtitle: 'Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'March 2009 - December 2009',\n        subtitle: 'Application Developer',\n        text: 'Cultivate Systems',\n        type: 'work'\n      },\n      {\n        date: 'July 2006 - February 2009',\n        subtitle: 'Software Engineer',\n        text: 'Threshold Corporation',\n        type: 'work'\n      },\n      {\n        date: 'June 2006',\n        subtitle: 'M.S. Computer Science',\n        text: 'University of California, Riverside',\n        type: 'education'\n      },\n      {\n        date: 'June 2004',\n        text: 'University of California, Riverside',\n        subtitle: 'B.S. Computer Science',\n        type: 'education'\n      }\n    ]}\n  />\n))\n",
            __ADDS_MAP__ = {
              'about--me': {startLoc: {col: 31, line: 32}, endLoc: {col: 1, line: 38}},
              'experience--threshold': {startLoc: {col: 7, line: 182}, endLoc: {col: 3, line: 196}},
              'experience--cultivate': {startLoc: {col: 7, line: 161}, endLoc: {col: 3, line: 181}},
              'experience--cyan': {startLoc: {col: 7, line: 101}, endLoc: {col: 3, line: 160}},
              'experience--ciena': {startLoc: {col: 7, line: 72}, endLoc: {col: 3, line: 100}},
              'experience--carium': {startLoc: {col: 7, line: 41}, endLoc: {col: 3, line: 71}},
              'education--ucr': {startLoc: {col: 35, line: 198}, endLoc: {col: 1, line: 218}},
              'timeline--professional': {startLoc: {col: 34, line: 220}, endLoc: {col: 1, line: 285}}
            },
            _ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _src_About__WEBPACK_IMPORTED_MODULE_4__.a,
              {title: 'Adam Meadows'},
              "I love writing beautiful code to create beautiful user interfaces. I'm happiest when I can also write RESTful APIs to enable user interfaces across multiple platforms. One of my favorite things to do though, is writing utilities to improve developer experience. I also have a passion for testing and automation."
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)('About', module)
            .addDecorator(
              withStorySource(
                "import moment from 'moment'\nimport React from 'react'\nimport {\n  faAdobe,\n  faAws,\n  faBitbucket,\n  faBootstrap,\n  faCss3,\n  faEmber,\n  faGithub,\n  faGoogle,\n  faHtml5,\n  faJava,\n  faJira,\n  faJs,\n  faLinux,\n  faMicrosoft,\n  faNodeJs,\n  faNpm,\n  faPython,\n  faReact,\n  faSlack,\n  faYarn\n} from '@fortawesome/free-brands-svg-icons'\nimport {storiesOf} from '@storybook/react'\n\nimport About from '../src/About'\nimport Job from '../src/Job'\nimport School from '../src/School'\nimport Timeline from '../src/Timeline'\n\nstoriesOf('About', module).add('me', () => (\n  <About title=\"Adam Meadows\">\n    I love writing beautiful code to create beautiful user interfaces. I&apos;m happiest when I can also write RESTful\n    APIs to enable user interfaces across multiple platforms. One of my favorite things to do though, is writing\n    utilities to improve developer experience. I also have a passion for testing and automation.\n  </About>\n))\n\nstoriesOf('Experience', module)\n  .add('Carium', () => (\n    <Job\n      company=\"Carium\"\n      end=\"Current\"\n      responsibilities={[\n        'Building web interfaces with React',\n        'Writing RESTful APIs using Python and Django',\n        'Performing code reviews on JavaScript and Python pull requests',\n        'Providing automation for continuous integration of multi-page-app web interface',\n        'Developing a library to allow sharing translations of user-visible text across iOS, Android, and Web'\n      ]}\n      start={moment('2018-04-09')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faReact, name: 'React'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faPython, name: 'Python'},\n        {name: 'Django'},\n        {icon: faAws, name: 'AWS'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'CircleCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Ciena', () => (\n    <Job\n      company=\"Ciena\"\n      end={moment('2018-04-08')}\n      responsibilities={[\n        'Building web interfaces with Ember',\n        'Performing code reviews on JavaScript pull requests',\n        'Developing a widget library used by the rest of the team',\n        'Providing automation for continuous integration and release of widget library'\n      ]}\n      start={moment('2015-08-25')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faEmber, name: 'Ember'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faBitbucket, name: 'Bitbucket'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'TeamCity'},\n        {name: 'TravisCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Cyan', () => (\n    <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2015-08-25')}\n        responsibilities={[\n          'Building re-usable web UI components for use by other web UI teams',\n          'Consolidating UI work across multiple projects'\n        ]}\n        start={moment('2012-08-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {name: 'Typescript'},\n          {name: 'jQuery'},\n          {icon: faBootstrap, name: 'Bootstrap'},\n          {name: 'Backbone'},\n          {icon: faReact, name: 'React'},\n          {icon: faNpm, name: 'npm'},\n          {icon: faYarn, name: 'Yarn'},\n          {icon: faNodeJs, name: 'Node'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {name: 'TravisCI'},\n          {icon: faJira, name: 'Jira'},\n          {icon: faSlack, name: 'Slack'}\n        ]}\n        title=\"Sr. Software Engineer\"\n      />\n\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2012-08-01')}\n        responsibilities={[\n          'Building a cloud-based network planning application using Google Web Toolkit (GWT)',\n          'Architecting and implementing the web user interface for the network planning application',\n          'Setting up automated testing for the web user interface',\n          'Writing APIs in Python using Django to support the UI'\n        ]}\n        start={moment('2010-01-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {icon: faGoogle, name: 'Google Web Toolkit'},\n          {icon: faJava, name: 'Java'},\n          {icon: faPython, name: 'Python'},\n          {name: 'Django'},\n          {name: 'SVN'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {icon: faJira, name: 'Jira'}\n        ]}\n        title=\"Software Engineer\"\n      />\n    </div>\n  ))\n  .add('Cultivate', () => (\n    <Job\n      company=\"Cultivate Systems\"\n      end={moment('2010-01-01')}\n      responsibilities={[\n        'Writing SQL queries to support boutique winery e-commerce system',\n        'Modifying HTML/CSS to make custom e-commerce sites match main sites of customers',\n        'Customizing HTML emails to match branding of customers',\n        'Renewing and installin SSL certificates on Microsof IIS servers '\n      ]}\n      start={moment('2009-03-01')}\n      technologies={[\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faAdobe, name: 'ColdFusion'},\n        {name: 'SQL'},\n        {icon: faMicrosoft, name: 'Microsoft IIS'}\n      ]}\n      title=\"Application Developer\"\n    />\n  ))\n  .add('Threshold', () => (\n    <Job\n      company=\"Threshold Corporation\"\n      end={moment('2009-02-01')}\n      responsibilities={[\n        'Designing/implementing a remote upgrade procedure for an embedded home network controller device',\n        'Designing/implementing a web-based user interface for configuring devices connected via low power wireless',\n        'Assisting in the design of an open-source low power wireless communication prototol ONE-NET',\n        'Setting up proper source control systems/procedures'\n      ]}\n      start={moment('2006-07-01')}\n      technologies={[{icon: faLinux, name: 'Linux'}, {name: 'Embedded systems'}, {icon: faAdobe, name: 'Flex'}]}\n      title=\"Software Engineer\"\n    />\n  ))\n\nstoriesOf('Education', module).add('UCR', () => (\n  <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n    <School\n      degree=\"M.S.\"\n      end=\"2006\"\n      gpa=\"3.8/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2004\"\n    />\n\n    <School\n      degree=\"B.S.\"\n      end=\"2004\"\n      gpa=\"3.6/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2000\"\n    />\n  </div>\n))\n\nstoriesOf('Timeline', module).add('Professional', () => (\n  <Timeline\n    events={[\n      {\n        date: 'April 2018 - present',\n        subtitle: 'Software Engineer',\n        text: 'Carium',\n        type: 'work'\n      },\n      {\n        date: 'August 2015 - April 2018',\n        subtitle: 'Software Engineer',\n        text: 'Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2015',\n        subtitle: 'Acquisition',\n        text: 'Cyan, Inc. is acquired by Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2012 - August 2015',\n        subtitle: 'Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'August 2012',\n        subtitle: 'Promoted to Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'January 2010 - August 2012',\n        subtitle: 'Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'March 2009 - December 2009',\n        subtitle: 'Application Developer',\n        text: 'Cultivate Systems',\n        type: 'work'\n      },\n      {\n        date: 'July 2006 - February 2009',\n        subtitle: 'Software Engineer',\n        text: 'Threshold Corporation',\n        type: 'work'\n      },\n      {\n        date: 'June 2006',\n        subtitle: 'M.S. Computer Science',\n        text: 'University of California, Riverside',\n        type: 'education'\n      },\n      {\n        date: 'June 2004',\n        text: 'University of California, Riverside',\n        subtitle: 'B.S. Computer Science',\n        type: 'education'\n      }\n    ]}\n  />\n))\n",
                __ADDS_MAP__
              )
            )
            .add('me', function() {
              return _ref
            }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)('Experience', module)
              .addDecorator(
                withStorySource(
                  "import moment from 'moment'\nimport React from 'react'\nimport {\n  faAdobe,\n  faAws,\n  faBitbucket,\n  faBootstrap,\n  faCss3,\n  faEmber,\n  faGithub,\n  faGoogle,\n  faHtml5,\n  faJava,\n  faJira,\n  faJs,\n  faLinux,\n  faMicrosoft,\n  faNodeJs,\n  faNpm,\n  faPython,\n  faReact,\n  faSlack,\n  faYarn\n} from '@fortawesome/free-brands-svg-icons'\nimport {storiesOf} from '@storybook/react'\n\nimport About from '../src/About'\nimport Job from '../src/Job'\nimport School from '../src/School'\nimport Timeline from '../src/Timeline'\n\nstoriesOf('About', module).add('me', () => (\n  <About title=\"Adam Meadows\">\n    I love writing beautiful code to create beautiful user interfaces. I&apos;m happiest when I can also write RESTful\n    APIs to enable user interfaces across multiple platforms. One of my favorite things to do though, is writing\n    utilities to improve developer experience. I also have a passion for testing and automation.\n  </About>\n))\n\nstoriesOf('Experience', module)\n  .add('Carium', () => (\n    <Job\n      company=\"Carium\"\n      end=\"Current\"\n      responsibilities={[\n        'Building web interfaces with React',\n        'Writing RESTful APIs using Python and Django',\n        'Performing code reviews on JavaScript and Python pull requests',\n        'Providing automation for continuous integration of multi-page-app web interface',\n        'Developing a library to allow sharing translations of user-visible text across iOS, Android, and Web'\n      ]}\n      start={moment('2018-04-09')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faReact, name: 'React'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faPython, name: 'Python'},\n        {name: 'Django'},\n        {icon: faAws, name: 'AWS'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'CircleCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Ciena', () => (\n    <Job\n      company=\"Ciena\"\n      end={moment('2018-04-08')}\n      responsibilities={[\n        'Building web interfaces with Ember',\n        'Performing code reviews on JavaScript pull requests',\n        'Developing a widget library used by the rest of the team',\n        'Providing automation for continuous integration and release of widget library'\n      ]}\n      start={moment('2015-08-25')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faEmber, name: 'Ember'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faBitbucket, name: 'Bitbucket'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'TeamCity'},\n        {name: 'TravisCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Cyan', () => (\n    <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2015-08-25')}\n        responsibilities={[\n          'Building re-usable web UI components for use by other web UI teams',\n          'Consolidating UI work across multiple projects'\n        ]}\n        start={moment('2012-08-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {name: 'Typescript'},\n          {name: 'jQuery'},\n          {icon: faBootstrap, name: 'Bootstrap'},\n          {name: 'Backbone'},\n          {icon: faReact, name: 'React'},\n          {icon: faNpm, name: 'npm'},\n          {icon: faYarn, name: 'Yarn'},\n          {icon: faNodeJs, name: 'Node'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {name: 'TravisCI'},\n          {icon: faJira, name: 'Jira'},\n          {icon: faSlack, name: 'Slack'}\n        ]}\n        title=\"Sr. Software Engineer\"\n      />\n\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2012-08-01')}\n        responsibilities={[\n          'Building a cloud-based network planning application using Google Web Toolkit (GWT)',\n          'Architecting and implementing the web user interface for the network planning application',\n          'Setting up automated testing for the web user interface',\n          'Writing APIs in Python using Django to support the UI'\n        ]}\n        start={moment('2010-01-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {icon: faGoogle, name: 'Google Web Toolkit'},\n          {icon: faJava, name: 'Java'},\n          {icon: faPython, name: 'Python'},\n          {name: 'Django'},\n          {name: 'SVN'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {icon: faJira, name: 'Jira'}\n        ]}\n        title=\"Software Engineer\"\n      />\n    </div>\n  ))\n  .add('Cultivate', () => (\n    <Job\n      company=\"Cultivate Systems\"\n      end={moment('2010-01-01')}\n      responsibilities={[\n        'Writing SQL queries to support boutique winery e-commerce system',\n        'Modifying HTML/CSS to make custom e-commerce sites match main sites of customers',\n        'Customizing HTML emails to match branding of customers',\n        'Renewing and installin SSL certificates on Microsof IIS servers '\n      ]}\n      start={moment('2009-03-01')}\n      technologies={[\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faAdobe, name: 'ColdFusion'},\n        {name: 'SQL'},\n        {icon: faMicrosoft, name: 'Microsoft IIS'}\n      ]}\n      title=\"Application Developer\"\n    />\n  ))\n  .add('Threshold', () => (\n    <Job\n      company=\"Threshold Corporation\"\n      end={moment('2009-02-01')}\n      responsibilities={[\n        'Designing/implementing a remote upgrade procedure for an embedded home network controller device',\n        'Designing/implementing a web-based user interface for configuring devices connected via low power wireless',\n        'Assisting in the design of an open-source low power wireless communication prototol ONE-NET',\n        'Setting up proper source control systems/procedures'\n      ]}\n      start={moment('2006-07-01')}\n      technologies={[{icon: faLinux, name: 'Linux'}, {name: 'Embedded systems'}, {icon: faAdobe, name: 'Flex'}]}\n      title=\"Software Engineer\"\n    />\n  ))\n\nstoriesOf('Education', module).add('UCR', () => (\n  <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n    <School\n      degree=\"M.S.\"\n      end=\"2006\"\n      gpa=\"3.8/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2004\"\n    />\n\n    <School\n      degree=\"B.S.\"\n      end=\"2004\"\n      gpa=\"3.6/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2000\"\n    />\n  </div>\n))\n\nstoriesOf('Timeline', module).add('Professional', () => (\n  <Timeline\n    events={[\n      {\n        date: 'April 2018 - present',\n        subtitle: 'Software Engineer',\n        text: 'Carium',\n        type: 'work'\n      },\n      {\n        date: 'August 2015 - April 2018',\n        subtitle: 'Software Engineer',\n        text: 'Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2015',\n        subtitle: 'Acquisition',\n        text: 'Cyan, Inc. is acquired by Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2012 - August 2015',\n        subtitle: 'Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'August 2012',\n        subtitle: 'Promoted to Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'January 2010 - August 2012',\n        subtitle: 'Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'March 2009 - December 2009',\n        subtitle: 'Application Developer',\n        text: 'Cultivate Systems',\n        type: 'work'\n      },\n      {\n        date: 'July 2006 - February 2009',\n        subtitle: 'Software Engineer',\n        text: 'Threshold Corporation',\n        type: 'work'\n      },\n      {\n        date: 'June 2006',\n        subtitle: 'M.S. Computer Science',\n        text: 'University of California, Riverside',\n        type: 'education'\n      },\n      {\n        date: 'June 2004',\n        text: 'University of California, Riverside',\n        subtitle: 'B.S. Computer Science',\n        type: 'education'\n      }\n    ]}\n  />\n))\n",
                  __ADDS_MAP__
                )
              )
              .add('Carium', function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _src_Job__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    company: 'Carium',
                    end: 'Current',
                    responsibilities: [
                      'Building web interfaces with React',
                      'Writing RESTful APIs using Python and Django',
                      'Performing code reviews on JavaScript and Python pull requests',
                      'Providing automation for continuous integration of multi-page-app web interface',
                      'Developing a library to allow sharing translations of user-visible text across iOS, Android, and Web'
                    ],
                    start: moment__WEBPACK_IMPORTED_MODULE_0___default()('2018-04-09'),
                    technologies: [
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.l, name: 'JavaScript'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.i, name: 'HTML'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.e, name: 'CSS'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.r, name: 'React'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.p, name: 'npm'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.t, name: 'Yarn'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.o, name: 'Node'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.q, name: 'Python'},
                      {name: 'Django'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.b, name: 'AWS'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.g, name: 'GitHub'},
                      {name: 'CircleCI'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.k, name: 'Jira'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.s, name: 'Slack'}
                    ],
                    title: 'Software Engineer'
                  }
                )
              })
              .add('Ciena', function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _src_Job__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    company: 'Ciena',
                    end: moment__WEBPACK_IMPORTED_MODULE_0___default()('2018-04-08'),
                    responsibilities: [
                      'Building web interfaces with Ember',
                      'Performing code reviews on JavaScript pull requests',
                      'Developing a widget library used by the rest of the team',
                      'Providing automation for continuous integration and release of widget library'
                    ],
                    start: moment__WEBPACK_IMPORTED_MODULE_0___default()('2015-08-25'),
                    technologies: [
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.l, name: 'JavaScript'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.i, name: 'HTML'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.e, name: 'CSS'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.f, name: 'Ember'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.p, name: 'npm'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.t, name: 'Yarn'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.o, name: 'Node'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.c, name: 'Bitbucket'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.g, name: 'GitHub'},
                      {name: 'TeamCity'},
                      {name: 'TravisCI'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.k, name: 'Jira'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.s, name: 'Slack'}
                    ],
                    title: 'Software Engineer'
                  }
                )
              })
              .add('Cyan', function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'div',
                  {style: {display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}},
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Job__WEBPACK_IMPORTED_MODULE_5__.a, {
                    company: 'Cyan, Inc.',
                    end: moment__WEBPACK_IMPORTED_MODULE_0___default()('2015-08-25'),
                    responsibilities: [
                      'Building re-usable web UI components for use by other web UI teams',
                      'Consolidating UI work across multiple projects'
                    ],
                    start: moment__WEBPACK_IMPORTED_MODULE_0___default()('2012-08-01'),
                    technologies: [
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.l, name: 'JavaScript'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.i, name: 'HTML'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.e, name: 'CSS'},
                      {name: 'Typescript'},
                      {name: 'jQuery'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.d, name: 'Bootstrap'},
                      {name: 'Backbone'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.r, name: 'React'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.p, name: 'npm'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.t, name: 'Yarn'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.o, name: 'Node'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.c, name: 'Bitbucket'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.g, name: 'GitHub'},
                      {name: 'TeamCity'},
                      {name: 'TravisCI'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.k, name: 'Jira'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.s, name: 'Slack'}
                    ],
                    title: 'Sr. Software Engineer'
                  }),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_Job__WEBPACK_IMPORTED_MODULE_5__.a, {
                    company: 'Cyan, Inc.',
                    end: moment__WEBPACK_IMPORTED_MODULE_0___default()('2012-08-01'),
                    responsibilities: [
                      'Building a cloud-based network planning application using Google Web Toolkit (GWT)',
                      'Architecting and implementing the web user interface for the network planning application',
                      'Setting up automated testing for the web user interface',
                      'Writing APIs in Python using Django to support the UI'
                    ],
                    start: moment__WEBPACK_IMPORTED_MODULE_0___default()('2010-01-01'),
                    technologies: [
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.l, name: 'JavaScript'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.i, name: 'HTML'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.e, name: 'CSS'},
                      {
                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.h,
                        name: 'Google Web Toolkit'
                      },
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.j, name: 'Java'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.q, name: 'Python'},
                      {name: 'Django'},
                      {name: 'SVN'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.c, name: 'Bitbucket'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.g, name: 'GitHub'},
                      {name: 'TeamCity'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.k, name: 'Jira'}
                    ],
                    title: 'Software Engineer'
                  })
                )
              })
              .add('Cultivate', function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _src_Job__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    company: 'Cultivate Systems',
                    end: moment__WEBPACK_IMPORTED_MODULE_0___default()('2010-01-01'),
                    responsibilities: [
                      'Writing SQL queries to support boutique winery e-commerce system',
                      'Modifying HTML/CSS to make custom e-commerce sites match main sites of customers',
                      'Customizing HTML emails to match branding of customers',
                      'Renewing and installin SSL certificates on Microsof IIS servers '
                    ],
                    start: moment__WEBPACK_IMPORTED_MODULE_0___default()('2009-03-01'),
                    technologies: [
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.i, name: 'HTML'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.e, name: 'CSS'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.a, name: 'ColdFusion'},
                      {name: 'SQL'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.n, name: 'Microsoft IIS'}
                    ],
                    title: 'Application Developer'
                  }
                )
              })
              .add('Threshold', function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _src_Job__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    company: 'Threshold Corporation',
                    end: moment__WEBPACK_IMPORTED_MODULE_0___default()('2009-02-01'),
                    responsibilities: [
                      'Designing/implementing a remote upgrade procedure for an embedded home network controller device',
                      'Designing/implementing a web-based user interface for configuring devices connected via low power wireless',
                      'Assisting in the design of an open-source low power wireless communication prototol ONE-NET',
                      'Setting up proper source control systems/procedures'
                    ],
                    start: moment__WEBPACK_IMPORTED_MODULE_0___default()('2006-07-01'),
                    technologies: [
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.m, name: 'Linux'},
                      {name: 'Embedded systems'},
                      {icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.a, name: 'Flex'}
                    ],
                    title: 'Software Engineer'
                  }
                )
              })
          var _ref2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _src_School__WEBPACK_IMPORTED_MODULE_6__.a,
              {
                degree: 'M.S.',
                end: '2006',
                gpa: '3.8/4.0',
                major: 'Computer Science',
                name: 'University of California, Riverside',
                start: '2004'
              }
            ),
            _ref3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _src_School__WEBPACK_IMPORTED_MODULE_6__.a,
              {
                degree: 'B.S.',
                end: '2004',
                gpa: '3.6/4.0',
                major: 'Computer Science',
                name: 'University of California, Riverside',
                start: '2000'
              }
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)('Education', module)
            .addDecorator(
              withStorySource(
                "import moment from 'moment'\nimport React from 'react'\nimport {\n  faAdobe,\n  faAws,\n  faBitbucket,\n  faBootstrap,\n  faCss3,\n  faEmber,\n  faGithub,\n  faGoogle,\n  faHtml5,\n  faJava,\n  faJira,\n  faJs,\n  faLinux,\n  faMicrosoft,\n  faNodeJs,\n  faNpm,\n  faPython,\n  faReact,\n  faSlack,\n  faYarn\n} from '@fortawesome/free-brands-svg-icons'\nimport {storiesOf} from '@storybook/react'\n\nimport About from '../src/About'\nimport Job from '../src/Job'\nimport School from '../src/School'\nimport Timeline from '../src/Timeline'\n\nstoriesOf('About', module).add('me', () => (\n  <About title=\"Adam Meadows\">\n    I love writing beautiful code to create beautiful user interfaces. I&apos;m happiest when I can also write RESTful\n    APIs to enable user interfaces across multiple platforms. One of my favorite things to do though, is writing\n    utilities to improve developer experience. I also have a passion for testing and automation.\n  </About>\n))\n\nstoriesOf('Experience', module)\n  .add('Carium', () => (\n    <Job\n      company=\"Carium\"\n      end=\"Current\"\n      responsibilities={[\n        'Building web interfaces with React',\n        'Writing RESTful APIs using Python and Django',\n        'Performing code reviews on JavaScript and Python pull requests',\n        'Providing automation for continuous integration of multi-page-app web interface',\n        'Developing a library to allow sharing translations of user-visible text across iOS, Android, and Web'\n      ]}\n      start={moment('2018-04-09')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faReact, name: 'React'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faPython, name: 'Python'},\n        {name: 'Django'},\n        {icon: faAws, name: 'AWS'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'CircleCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Ciena', () => (\n    <Job\n      company=\"Ciena\"\n      end={moment('2018-04-08')}\n      responsibilities={[\n        'Building web interfaces with Ember',\n        'Performing code reviews on JavaScript pull requests',\n        'Developing a widget library used by the rest of the team',\n        'Providing automation for continuous integration and release of widget library'\n      ]}\n      start={moment('2015-08-25')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faEmber, name: 'Ember'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faBitbucket, name: 'Bitbucket'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'TeamCity'},\n        {name: 'TravisCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Cyan', () => (\n    <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2015-08-25')}\n        responsibilities={[\n          'Building re-usable web UI components for use by other web UI teams',\n          'Consolidating UI work across multiple projects'\n        ]}\n        start={moment('2012-08-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {name: 'Typescript'},\n          {name: 'jQuery'},\n          {icon: faBootstrap, name: 'Bootstrap'},\n          {name: 'Backbone'},\n          {icon: faReact, name: 'React'},\n          {icon: faNpm, name: 'npm'},\n          {icon: faYarn, name: 'Yarn'},\n          {icon: faNodeJs, name: 'Node'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {name: 'TravisCI'},\n          {icon: faJira, name: 'Jira'},\n          {icon: faSlack, name: 'Slack'}\n        ]}\n        title=\"Sr. Software Engineer\"\n      />\n\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2012-08-01')}\n        responsibilities={[\n          'Building a cloud-based network planning application using Google Web Toolkit (GWT)',\n          'Architecting and implementing the web user interface for the network planning application',\n          'Setting up automated testing for the web user interface',\n          'Writing APIs in Python using Django to support the UI'\n        ]}\n        start={moment('2010-01-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {icon: faGoogle, name: 'Google Web Toolkit'},\n          {icon: faJava, name: 'Java'},\n          {icon: faPython, name: 'Python'},\n          {name: 'Django'},\n          {name: 'SVN'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {icon: faJira, name: 'Jira'}\n        ]}\n        title=\"Software Engineer\"\n      />\n    </div>\n  ))\n  .add('Cultivate', () => (\n    <Job\n      company=\"Cultivate Systems\"\n      end={moment('2010-01-01')}\n      responsibilities={[\n        'Writing SQL queries to support boutique winery e-commerce system',\n        'Modifying HTML/CSS to make custom e-commerce sites match main sites of customers',\n        'Customizing HTML emails to match branding of customers',\n        'Renewing and installin SSL certificates on Microsof IIS servers '\n      ]}\n      start={moment('2009-03-01')}\n      technologies={[\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faAdobe, name: 'ColdFusion'},\n        {name: 'SQL'},\n        {icon: faMicrosoft, name: 'Microsoft IIS'}\n      ]}\n      title=\"Application Developer\"\n    />\n  ))\n  .add('Threshold', () => (\n    <Job\n      company=\"Threshold Corporation\"\n      end={moment('2009-02-01')}\n      responsibilities={[\n        'Designing/implementing a remote upgrade procedure for an embedded home network controller device',\n        'Designing/implementing a web-based user interface for configuring devices connected via low power wireless',\n        'Assisting in the design of an open-source low power wireless communication prototol ONE-NET',\n        'Setting up proper source control systems/procedures'\n      ]}\n      start={moment('2006-07-01')}\n      technologies={[{icon: faLinux, name: 'Linux'}, {name: 'Embedded systems'}, {icon: faAdobe, name: 'Flex'}]}\n      title=\"Software Engineer\"\n    />\n  ))\n\nstoriesOf('Education', module).add('UCR', () => (\n  <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n    <School\n      degree=\"M.S.\"\n      end=\"2006\"\n      gpa=\"3.8/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2004\"\n    />\n\n    <School\n      degree=\"B.S.\"\n      end=\"2004\"\n      gpa=\"3.6/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2000\"\n    />\n  </div>\n))\n\nstoriesOf('Timeline', module).add('Professional', () => (\n  <Timeline\n    events={[\n      {\n        date: 'April 2018 - present',\n        subtitle: 'Software Engineer',\n        text: 'Carium',\n        type: 'work'\n      },\n      {\n        date: 'August 2015 - April 2018',\n        subtitle: 'Software Engineer',\n        text: 'Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2015',\n        subtitle: 'Acquisition',\n        text: 'Cyan, Inc. is acquired by Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2012 - August 2015',\n        subtitle: 'Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'August 2012',\n        subtitle: 'Promoted to Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'January 2010 - August 2012',\n        subtitle: 'Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'March 2009 - December 2009',\n        subtitle: 'Application Developer',\n        text: 'Cultivate Systems',\n        type: 'work'\n      },\n      {\n        date: 'July 2006 - February 2009',\n        subtitle: 'Software Engineer',\n        text: 'Threshold Corporation',\n        type: 'work'\n      },\n      {\n        date: 'June 2006',\n        subtitle: 'M.S. Computer Science',\n        text: 'University of California, Riverside',\n        type: 'education'\n      },\n      {\n        date: 'June 2004',\n        text: 'University of California, Riverside',\n        subtitle: 'B.S. Computer Science',\n        type: 'education'\n      }\n    ]}\n  />\n))\n",
                __ADDS_MAP__
              )
            )
            .add('UCR', function() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                {style: {display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}},
                _ref2,
                _ref3
              )
            }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)('Timeline', module)
              .addDecorator(
                withStorySource(
                  "import moment from 'moment'\nimport React from 'react'\nimport {\n  faAdobe,\n  faAws,\n  faBitbucket,\n  faBootstrap,\n  faCss3,\n  faEmber,\n  faGithub,\n  faGoogle,\n  faHtml5,\n  faJava,\n  faJira,\n  faJs,\n  faLinux,\n  faMicrosoft,\n  faNodeJs,\n  faNpm,\n  faPython,\n  faReact,\n  faSlack,\n  faYarn\n} from '@fortawesome/free-brands-svg-icons'\nimport {storiesOf} from '@storybook/react'\n\nimport About from '../src/About'\nimport Job from '../src/Job'\nimport School from '../src/School'\nimport Timeline from '../src/Timeline'\n\nstoriesOf('About', module).add('me', () => (\n  <About title=\"Adam Meadows\">\n    I love writing beautiful code to create beautiful user interfaces. I&apos;m happiest when I can also write RESTful\n    APIs to enable user interfaces across multiple platforms. One of my favorite things to do though, is writing\n    utilities to improve developer experience. I also have a passion for testing and automation.\n  </About>\n))\n\nstoriesOf('Experience', module)\n  .add('Carium', () => (\n    <Job\n      company=\"Carium\"\n      end=\"Current\"\n      responsibilities={[\n        'Building web interfaces with React',\n        'Writing RESTful APIs using Python and Django',\n        'Performing code reviews on JavaScript and Python pull requests',\n        'Providing automation for continuous integration of multi-page-app web interface',\n        'Developing a library to allow sharing translations of user-visible text across iOS, Android, and Web'\n      ]}\n      start={moment('2018-04-09')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faReact, name: 'React'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faPython, name: 'Python'},\n        {name: 'Django'},\n        {icon: faAws, name: 'AWS'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'CircleCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Ciena', () => (\n    <Job\n      company=\"Ciena\"\n      end={moment('2018-04-08')}\n      responsibilities={[\n        'Building web interfaces with Ember',\n        'Performing code reviews on JavaScript pull requests',\n        'Developing a widget library used by the rest of the team',\n        'Providing automation for continuous integration and release of widget library'\n      ]}\n      start={moment('2015-08-25')}\n      technologies={[\n        {icon: faJs, name: 'JavaScript'},\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faEmber, name: 'Ember'},\n        {icon: faNpm, name: 'npm'},\n        {icon: faYarn, name: 'Yarn'},\n        {icon: faNodeJs, name: 'Node'},\n        {icon: faBitbucket, name: 'Bitbucket'},\n        {icon: faGithub, name: 'GitHub'},\n        {name: 'TeamCity'},\n        {name: 'TravisCI'},\n        {icon: faJira, name: 'Jira'},\n        {icon: faSlack, name: 'Slack'}\n      ]}\n      title=\"Software Engineer\"\n    />\n  ))\n  .add('Cyan', () => (\n    <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2015-08-25')}\n        responsibilities={[\n          'Building re-usable web UI components for use by other web UI teams',\n          'Consolidating UI work across multiple projects'\n        ]}\n        start={moment('2012-08-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {name: 'Typescript'},\n          {name: 'jQuery'},\n          {icon: faBootstrap, name: 'Bootstrap'},\n          {name: 'Backbone'},\n          {icon: faReact, name: 'React'},\n          {icon: faNpm, name: 'npm'},\n          {icon: faYarn, name: 'Yarn'},\n          {icon: faNodeJs, name: 'Node'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {name: 'TravisCI'},\n          {icon: faJira, name: 'Jira'},\n          {icon: faSlack, name: 'Slack'}\n        ]}\n        title=\"Sr. Software Engineer\"\n      />\n\n      <Job\n        company=\"Cyan, Inc.\"\n        end={moment('2012-08-01')}\n        responsibilities={[\n          'Building a cloud-based network planning application using Google Web Toolkit (GWT)',\n          'Architecting and implementing the web user interface for the network planning application',\n          'Setting up automated testing for the web user interface',\n          'Writing APIs in Python using Django to support the UI'\n        ]}\n        start={moment('2010-01-01')}\n        technologies={[\n          {icon: faJs, name: 'JavaScript'},\n          {icon: faHtml5, name: 'HTML'},\n          {icon: faCss3, name: 'CSS'},\n          {icon: faGoogle, name: 'Google Web Toolkit'},\n          {icon: faJava, name: 'Java'},\n          {icon: faPython, name: 'Python'},\n          {name: 'Django'},\n          {name: 'SVN'},\n          {icon: faBitbucket, name: 'Bitbucket'},\n          {icon: faGithub, name: 'GitHub'},\n          {name: 'TeamCity'},\n          {icon: faJira, name: 'Jira'}\n        ]}\n        title=\"Software Engineer\"\n      />\n    </div>\n  ))\n  .add('Cultivate', () => (\n    <Job\n      company=\"Cultivate Systems\"\n      end={moment('2010-01-01')}\n      responsibilities={[\n        'Writing SQL queries to support boutique winery e-commerce system',\n        'Modifying HTML/CSS to make custom e-commerce sites match main sites of customers',\n        'Customizing HTML emails to match branding of customers',\n        'Renewing and installin SSL certificates on Microsof IIS servers '\n      ]}\n      start={moment('2009-03-01')}\n      technologies={[\n        {icon: faHtml5, name: 'HTML'},\n        {icon: faCss3, name: 'CSS'},\n        {icon: faAdobe, name: 'ColdFusion'},\n        {name: 'SQL'},\n        {icon: faMicrosoft, name: 'Microsoft IIS'}\n      ]}\n      title=\"Application Developer\"\n    />\n  ))\n  .add('Threshold', () => (\n    <Job\n      company=\"Threshold Corporation\"\n      end={moment('2009-02-01')}\n      responsibilities={[\n        'Designing/implementing a remote upgrade procedure for an embedded home network controller device',\n        'Designing/implementing a web-based user interface for configuring devices connected via low power wireless',\n        'Assisting in the design of an open-source low power wireless communication prototol ONE-NET',\n        'Setting up proper source control systems/procedures'\n      ]}\n      start={moment('2006-07-01')}\n      technologies={[{icon: faLinux, name: 'Linux'}, {name: 'Embedded systems'}, {icon: faAdobe, name: 'Flex'}]}\n      title=\"Software Engineer\"\n    />\n  ))\n\nstoriesOf('Education', module).add('UCR', () => (\n  <div style={{display: 'grid', gridTemplateRows: 'auto auto', rowGap: 20}}>\n    <School\n      degree=\"M.S.\"\n      end=\"2006\"\n      gpa=\"3.8/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2004\"\n    />\n\n    <School\n      degree=\"B.S.\"\n      end=\"2004\"\n      gpa=\"3.6/4.0\"\n      major=\"Computer Science\"\n      name=\"University of California, Riverside\"\n      start=\"2000\"\n    />\n  </div>\n))\n\nstoriesOf('Timeline', module).add('Professional', () => (\n  <Timeline\n    events={[\n      {\n        date: 'April 2018 - present',\n        subtitle: 'Software Engineer',\n        text: 'Carium',\n        type: 'work'\n      },\n      {\n        date: 'August 2015 - April 2018',\n        subtitle: 'Software Engineer',\n        text: 'Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2015',\n        subtitle: 'Acquisition',\n        text: 'Cyan, Inc. is acquired by Ciena',\n        type: 'work'\n      },\n      {\n        date: 'August 2012 - August 2015',\n        subtitle: 'Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'August 2012',\n        subtitle: 'Promoted to Sr. Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'January 2010 - August 2012',\n        subtitle: 'Software Engineer',\n        text: 'Cyan, Inc.',\n        type: 'work'\n      },\n      {\n        date: 'March 2009 - December 2009',\n        subtitle: 'Application Developer',\n        text: 'Cultivate Systems',\n        type: 'work'\n      },\n      {\n        date: 'July 2006 - February 2009',\n        subtitle: 'Software Engineer',\n        text: 'Threshold Corporation',\n        type: 'work'\n      },\n      {\n        date: 'June 2006',\n        subtitle: 'M.S. Computer Science',\n        text: 'University of California, Riverside',\n        type: 'education'\n      },\n      {\n        date: 'June 2004',\n        text: 'University of California, Riverside',\n        subtitle: 'B.S. Computer Science',\n        type: 'education'\n      }\n    ]}\n  />\n))\n",
                  __ADDS_MAP__
                )
              )
              .add('Professional', function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _src_Timeline__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    events: [
                      {date: 'April 2018 - present', subtitle: 'Software Engineer', text: 'Carium', type: 'work'},
                      {date: 'August 2015 - April 2018', subtitle: 'Software Engineer', text: 'Ciena', type: 'work'},
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
                    ]
                  }
                )
              })
        }.call(this, __webpack_require__(179)(module))
    },
    648: function(module, exports, __webpack_require__) {
      var map = {
        './af': 239,
        './af.js': 239,
        './ar': 240,
        './ar-dz': 241,
        './ar-dz.js': 241,
        './ar-kw': 242,
        './ar-kw.js': 242,
        './ar-ly': 243,
        './ar-ly.js': 243,
        './ar-ma': 244,
        './ar-ma.js': 244,
        './ar-sa': 245,
        './ar-sa.js': 245,
        './ar-tn': 246,
        './ar-tn.js': 246,
        './ar.js': 240,
        './az': 247,
        './az.js': 247,
        './be': 248,
        './be.js': 248,
        './bg': 249,
        './bg.js': 249,
        './bm': 250,
        './bm.js': 250,
        './bn': 251,
        './bn.js': 251,
        './bo': 252,
        './bo.js': 252,
        './br': 253,
        './br.js': 253,
        './bs': 254,
        './bs.js': 254,
        './ca': 255,
        './ca.js': 255,
        './cs': 256,
        './cs.js': 256,
        './cv': 257,
        './cv.js': 257,
        './cy': 258,
        './cy.js': 258,
        './da': 259,
        './da.js': 259,
        './de': 260,
        './de-at': 261,
        './de-at.js': 261,
        './de-ch': 262,
        './de-ch.js': 262,
        './de.js': 260,
        './dv': 263,
        './dv.js': 263,
        './el': 264,
        './el.js': 264,
        './en-SG': 265,
        './en-SG.js': 265,
        './en-au': 266,
        './en-au.js': 266,
        './en-ca': 267,
        './en-ca.js': 267,
        './en-gb': 268,
        './en-gb.js': 268,
        './en-ie': 269,
        './en-ie.js': 269,
        './en-il': 270,
        './en-il.js': 270,
        './en-nz': 271,
        './en-nz.js': 271,
        './eo': 272,
        './eo.js': 272,
        './es': 273,
        './es-do': 274,
        './es-do.js': 274,
        './es-us': 275,
        './es-us.js': 275,
        './es.js': 273,
        './et': 276,
        './et.js': 276,
        './eu': 277,
        './eu.js': 277,
        './fa': 278,
        './fa.js': 278,
        './fi': 279,
        './fi.js': 279,
        './fo': 280,
        './fo.js': 280,
        './fr': 281,
        './fr-ca': 282,
        './fr-ca.js': 282,
        './fr-ch': 283,
        './fr-ch.js': 283,
        './fr.js': 281,
        './fy': 284,
        './fy.js': 284,
        './ga': 285,
        './ga.js': 285,
        './gd': 286,
        './gd.js': 286,
        './gl': 287,
        './gl.js': 287,
        './gom-latn': 288,
        './gom-latn.js': 288,
        './gu': 289,
        './gu.js': 289,
        './he': 290,
        './he.js': 290,
        './hi': 291,
        './hi.js': 291,
        './hr': 292,
        './hr.js': 292,
        './hu': 293,
        './hu.js': 293,
        './hy-am': 294,
        './hy-am.js': 294,
        './id': 295,
        './id.js': 295,
        './is': 296,
        './is.js': 296,
        './it': 297,
        './it-ch': 298,
        './it-ch.js': 298,
        './it.js': 297,
        './ja': 299,
        './ja.js': 299,
        './jv': 300,
        './jv.js': 300,
        './ka': 301,
        './ka.js': 301,
        './kk': 302,
        './kk.js': 302,
        './km': 303,
        './km.js': 303,
        './kn': 304,
        './kn.js': 304,
        './ko': 305,
        './ko.js': 305,
        './ku': 306,
        './ku.js': 306,
        './ky': 307,
        './ky.js': 307,
        './lb': 308,
        './lb.js': 308,
        './lo': 309,
        './lo.js': 309,
        './lt': 310,
        './lt.js': 310,
        './lv': 311,
        './lv.js': 311,
        './me': 312,
        './me.js': 312,
        './mi': 313,
        './mi.js': 313,
        './mk': 314,
        './mk.js': 314,
        './ml': 315,
        './ml.js': 315,
        './mn': 316,
        './mn.js': 316,
        './mr': 317,
        './mr.js': 317,
        './ms': 318,
        './ms-my': 319,
        './ms-my.js': 319,
        './ms.js': 318,
        './mt': 320,
        './mt.js': 320,
        './my': 321,
        './my.js': 321,
        './nb': 322,
        './nb.js': 322,
        './ne': 323,
        './ne.js': 323,
        './nl': 324,
        './nl-be': 325,
        './nl-be.js': 325,
        './nl.js': 324,
        './nn': 326,
        './nn.js': 326,
        './pa-in': 327,
        './pa-in.js': 327,
        './pl': 328,
        './pl.js': 328,
        './pt': 329,
        './pt-br': 330,
        './pt-br.js': 330,
        './pt.js': 329,
        './ro': 331,
        './ro.js': 331,
        './ru': 332,
        './ru.js': 332,
        './sd': 333,
        './sd.js': 333,
        './se': 334,
        './se.js': 334,
        './si': 335,
        './si.js': 335,
        './sk': 336,
        './sk.js': 336,
        './sl': 337,
        './sl.js': 337,
        './sq': 338,
        './sq.js': 338,
        './sr': 339,
        './sr-cyrl': 340,
        './sr-cyrl.js': 340,
        './sr.js': 339,
        './ss': 341,
        './ss.js': 341,
        './sv': 342,
        './sv.js': 342,
        './sw': 343,
        './sw.js': 343,
        './ta': 344,
        './ta.js': 344,
        './te': 345,
        './te.js': 345,
        './tet': 346,
        './tet.js': 346,
        './tg': 347,
        './tg.js': 347,
        './th': 348,
        './th.js': 348,
        './tl-ph': 349,
        './tl-ph.js': 349,
        './tlh': 350,
        './tlh.js': 350,
        './tr': 351,
        './tr.js': 351,
        './tzl': 352,
        './tzl.js': 352,
        './tzm': 353,
        './tzm-latn': 354,
        './tzm-latn.js': 354,
        './tzm.js': 353,
        './ug-cn': 355,
        './ug-cn.js': 355,
        './uk': 356,
        './uk.js': 356,
        './ur': 357,
        './ur.js': 357,
        './uz': 358,
        './uz-latn': 359,
        './uz-latn.js': 359,
        './uz.js': 358,
        './vi': 360,
        './vi.js': 360,
        './x-pseudo': 361,
        './x-pseudo.js': 361,
        './yo': 362,
        './yo.js': 362,
        './zh-cn': 363,
        './zh-cn.js': 363,
        './zh-hk': 364,
        './zh-hk.js': 364,
        './zh-tw': 365,
        './zh-tw.js': 365
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 648)
    },
    663: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(664)
      'string' == typeof content && (content = [[module.i, content, '']])
      var options = {hmr: !0, transform: void 0, insertInto: void 0}
      __webpack_require__(369)(content, options)
      content.locals && (module.exports = content.locals)
    },
    664: function(module, exports, __webpack_require__) {
      ;(module.exports = __webpack_require__(368)(!1)).push([
        module.i,
        '.vertical-timeline-element--red .vertical-timeline-element-content {\n  border-top: 3px solid #dc3545;\n}\n\n.vertical-timeline-element--blue .vertical-timeline-element-content {\n  border-top: 3px solid #007bff;\n}\n',
        ''
      ])
    }
  },
  [[379, 1, 2]]
])
//# sourceMappingURL=main.b4639c0aecc3d54e527f.bundle.js.map
