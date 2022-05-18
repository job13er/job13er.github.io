;(window.webpackJsonp = window.webpackJsonp || []).push([
  [122],
  {
    1447: function(e, n) {
      e.exports = function(e) {
        var n = {begin: '\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*'},
          a = {className: 'meta', begin: /<\?(php)?|\?>/},
          i = {
            className: 'string',
            contains: [e.BACKSLASH_ESCAPE, a],
            variants: [
              {begin: 'b"', end: '"'},
              {begin: "b'", end: "'"},
              e.inherit(e.APOS_STRING_MODE, {illegal: null}),
              e.inherit(e.QUOTE_STRING_MODE, {illegal: null})
            ]
          },
          s = {variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]}
        return {
          aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
          case_insensitive: !0,
          keywords:
            'and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally',
          contains: [
            e.HASH_COMMENT_MODE,
            e.COMMENT('//', '$', {contains: [a]}),
            e.COMMENT('/\\*', '\\*/', {contains: [{className: 'doctag', begin: '@[A-Za-z]+'}]}),
            e.COMMENT('__halt_compiler.+?;', !1, {
              endsWithParent: !0,
              keywords: '__halt_compiler',
              lexemes: e.UNDERSCORE_IDENT_RE
            }),
            {
              className: 'string',
              begin: /<<<['"]?\w+['"]?$/,
              end: /^\w+;?$/,
              contains: [
                e.BACKSLASH_ESCAPE,
                {className: 'subst', variants: [{begin: /\$\w+/}, {begin: /\{\$/, end: /\}/}]}
              ]
            },
            a,
            {className: 'keyword', begin: /\$this\b/},
            n,
            {begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},
            {
              className: 'function',
              beginKeywords: 'function',
              end: /[;{]/,
              excludeEnd: !0,
              illegal: '\\$|\\[|%',
              contains: [
                e.UNDERSCORE_TITLE_MODE,
                {className: 'params', begin: '\\(', end: '\\)', contains: ['self', n, e.C_BLOCK_COMMENT_MODE, i, s]}
              ]
            },
            {
              className: 'class',
              beginKeywords: 'class interface',
              end: '{',
              excludeEnd: !0,
              illegal: /[:\(\$"]/,
              contains: [{beginKeywords: 'extends implements'}, e.UNDERSCORE_TITLE_MODE]
            },
            {beginKeywords: 'namespace', end: ';', illegal: /[\.']/, contains: [e.UNDERSCORE_TITLE_MODE]},
            {beginKeywords: 'use', end: ';', contains: [e.UNDERSCORE_TITLE_MODE]},
            {begin: '=>'},
            i,
            s
          ]
        }
      }
    }
  }
])
