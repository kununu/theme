# @kununu/stylelint-config

> kununu config for stylelint

This package contains stylelint rules for consistent CSS (or SCSS) code across kununu's projects.

## 📦 Installation

Add @kununu/stylelint-config npm package as dev dependency to your project:
```console
npx install --save-dev @kununu/stylelint-config
```

## 💻 Usage

Create a `.stylelintrc` file with the following configuration:

```yaml
{
  "extends": "@kununu/stylelint-config"
}
```

See [docs](https://stylelint.io/user-guide/configuration) to find more detailed information on stylelint configuration and usage.

## ⚡️ Plugins

At kununu, [@kununu/eslint-config](https://www.npmjs.com/package/@kununu/eslint-config) and [@kununu/stylelint-config](https://www.npmjs.com/package/@kununu/stylelint-config) linters runs on every commit, but finding a lint error after push can be frustrating and waste time. In order to avoid it, editor plugins are available to warn you and validate as you code.

There's what we use and recommend:

**Atom**
- [linter-stylelint](https://atom.io/packages/linter-stylelint)

**Visual Code Studio**
- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
