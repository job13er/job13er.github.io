;(window.webpackJsonp = window.webpackJsonp || []).push([
  [129],
  {
    1454: function(e, n) {
      e.exports = function(e) {
        var n = '[ \\t\\f]*',
          a = '(' + n + '[:=]' + n + '|[ \\t\\f]+)',
          t = '([^\\\\:= \\t\\f\\n]|\\\\.)+',
          s = {
            end: a,
            relevance: 0,
            starts: {className: 'string', end: /$/, relevance: 0, contains: [{begin: '\\\\\\n'}]}
          }
        return {
          case_insensitive: !0,
          illegal: /\S/,
          contains: [
            e.COMMENT('^\\s*[!#]', '$'),
            {
              begin: '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+' + a,
              returnBegin: !0,
              contains: [{className: 'attr', begin: '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+', endsParent: !0, relevance: 0}],
              starts: s
            },
            {
              begin: t + a,
              returnBegin: !0,
              relevance: 0,
              contains: [{className: 'meta', begin: t, endsParent: !0, relevance: 0}],
              starts: s
            },
            {className: 'attr', relevance: 0, begin: t + n + '$'}
          ]
        }
      }
    }
  }
])
