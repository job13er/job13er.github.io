;(window.webpackJsonp = window.webpackJsonp || []).push([
  [157],
  {
    1483: function(e, n) {
      e.exports = function(e) {
        return {
          aliases: ['p21', 'step', 'stp'],
          case_insensitive: !0,
          lexemes: '[A-Z_][A-Z0-9_.]*',
          keywords: {keyword: 'HEADER ENDSEC DATA'},
          contains: [
            {className: 'meta', begin: 'ISO-10303-21;', relevance: 10},
            {className: 'meta', begin: 'END-ISO-10303-21;', relevance: 10},
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.COMMENT('/\\*\\*!', '\\*/'),
            e.C_NUMBER_MODE,
            e.inherit(e.APOS_STRING_MODE, {illegal: null}),
            e.inherit(e.QUOTE_STRING_MODE, {illegal: null}),
            {className: 'string', begin: "'", end: "'"},
            {className: 'symbol', variants: [{begin: '#', end: '\\d+', illegal: '\\W'}]}
          ]
        }
      }
    }
  }
])
