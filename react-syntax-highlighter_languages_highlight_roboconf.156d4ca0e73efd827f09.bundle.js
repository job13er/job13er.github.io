;(window.webpackJsonp = window.webpackJsonp || []).push([
  [139],
  {
    1464: function(n, e) {
      n.exports = function(n) {
        var e = {
          className: 'attribute',
          begin: /[a-zA-Z-_]+/,
          end: /\s*:/,
          excludeEnd: !0,
          starts: {
            end: ';',
            relevance: 0,
            contains: [
              {className: 'variable', begin: /\.[a-zA-Z-_]+/},
              {className: 'keyword', begin: /\(optional\)/}
            ]
          }
        }
        return {
          aliases: ['graph', 'instances'],
          case_insensitive: !0,
          keywords: 'import',
          contains: [
            {begin: '^facet [a-zA-Z-_][^\\n{]+\\{', end: '}', keywords: 'facet', contains: [e, n.HASH_COMMENT_MODE]},
            {
              begin: '^\\s*instance of [a-zA-Z-_][^\\n{]+\\{',
              end: '}',
              keywords: 'name count channels instance-data instance-state instance of',
              illegal: /\S/,
              contains: ['self', e, n.HASH_COMMENT_MODE]
            },
            {begin: '^[a-zA-Z-_][^\\n{]+\\{', end: '}', contains: [e, n.HASH_COMMENT_MODE]},
            n.HASH_COMMENT_MODE
          ]
        }
      }
    }
  }
])
