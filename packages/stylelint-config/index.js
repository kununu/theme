module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-rational-order"
  ],
  "plugins": [
    "stylelint-scss",
    "stylelint-order"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-named": "never",
    "comment-empty-line-before": ["always", {ignore: ["after-comment"]}],
    "comment-whitespace-inside": "always",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "function-url-quotes": "always",
    "indentation": 2,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "no-duplicate-selectors": true,
    "number-leading-zero": "never",
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": ["always", {"except": ["after-single-line-comment", "first-nested"]}],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-max-id": [0, {"severity": "warning"}],
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["global", "export", "import", "local"]
    }],
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-colon-notation": "single",
    "string-quotes": "single",
    "value-no-vendor-prefix": true,
    "scss/at-rule-no-unknown": true,
    "order/order": [
      {
        "type": "at-rule",
        "name": "extend"
      },
      {
        "type": "at-rule",
        "name": "include"
      },
      "declarations",
      "rules",
      {
        "type": "at-rule",
        "name": "media"
      }
    ]
  }
};
