;(window.webpackJsonp = window.webpackJsonp || []).push([
  [167],
  {
    1493: function(e, n) {
      e.exports = function(e) {
        var n =
            'attribute block constant cycle date dump include max min parent random range source template_from_string',
          a = {
            beginKeywords: n,
            keywords: {name: n},
            relevance: 0,
            contains: [{className: 'params', begin: '\\(', end: '\\)'}]
          },
          t = {
            begin: /\|[A-Za-z_]+:?/,
            keywords:
              'abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode',
            contains: [a]
          },
          s =
            'apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with'
        return (
          (s =
            s +
            ' ' +
            s
              .split(' ')
              .map(function(e) {
                return 'end' + e
              })
              .join(' ')),
          {
            aliases: ['craftcms'],
            case_insensitive: !0,
            subLanguage: 'xml',
            contains: [
              e.COMMENT(/\{#/, /#}/),
              {
                className: 'template-tag',
                begin: /\{%/,
                end: /%}/,
                contains: [
                  {
                    className: 'name',
                    begin: /\w+/,
                    keywords: s,
                    starts: {endsWithParent: !0, contains: [t, a], relevance: 0}
                  }
                ]
              },
              {className: 'template-variable', begin: /\{\{/, end: /}}/, contains: ['self', t, a]}
            ]
          }
        )
      }
    }
  }
])
