# @kununu/stylelint-config

> kununu config for stylelint

This package contains stylelint rules for consistent CSS (or SCSS) code across kununu's projects.

## 📦 Installation

If using npm 5+, use this shortcut:

```console
npx install-peerdeps --dev @kununu/stylelint-config
```

Alternatively you can install the peer dependencies manually like this:

```console
npm install --save-dev @kununu/stylelint-config stylelint@9.10.1 stylelint-config-rational-order@0.0.4 stylelint-config-standard@18.2.0 stylelint-order@2.2.0 stylelint-scss@3.5.4
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

At kununu, [@kununu/eslint-config]([https://www.npmjs.com/package/@kununu/eslint-config](https://www.npmjs.com/package/@kununu/eslint-config)) and [@kununu/stylelint-config]([https://www.npmjs.com/package/@kununu/stylelint-config](https://www.npmjs.com/package/@kununu/stylelint-config)) linters runs on every commit, but finding a lint error after push can be frustrating and waste time. In order to avoid it, editor plugins are available to warn you and validate as you code.

There's what we use and recommend:

**Atom**
- [linter-stylelint](https://atom.io/packages/linter-stylelint)

**Visual Code Studio**
- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
