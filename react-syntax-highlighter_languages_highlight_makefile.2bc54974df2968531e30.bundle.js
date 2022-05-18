;(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    1422: function(e, i) {
      e.exports = function(e) {
        var i = {
            className: 'variable',
            variants: [
              {begin: '\\$\\(' + e.UNDERSCORE_IDENT_RE + '\\)', contains: [e.BACKSLASH_ESCAPE]},
              {begin: /\$[@%<?\^\+\*]/}
            ]
          },
          n = {className: 'string', begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, i]},
          a = {
            className: 'variable',
            begin: /\$\([\w-]+\s/,
            end: /\)/,
            keywords: {
              built_in:
                'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value'
            },
            contains: [i]
          },
          s = {begin: '^' + e.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)'},
          r = {className: 'section', begin: /^[^\s]+:/, end: /$/, contains: [i]}
        return {
          aliases: ['mk', 'mak'],
          keywords:
            'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath',
          lexemes: /[\w-]+/,
          contains: [
            e.HASH_COMMENT_MODE,
            i,
            n,
            a,
            s,
            {className: 'meta', begin: /^\.PHONY:/, end: /$/, keywords: {'meta-keyword': '.PHONY'}, lexemes: /[\.\w]+/},
            r
          ]
        }
      }
    }
  }
])
