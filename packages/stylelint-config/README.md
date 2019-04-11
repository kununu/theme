# @kununu/stylelint-config

> kununu shareable config for stylelint

For consistent CSS code across kununu's repos.

## Installation

```console
$ npm install --save-dev @kununu/stylelint-config stylelint
```

## Usage

Create a `.stylelintrc` file with the following configuration:

```yaml
{
  "extends": "@kununu/stylelint-config"
}
```

### Extending the config
Simply add a `rules` key to your config and your overrides there.

For example, if you'd like change indentation rule to tabs:

```yaml
{
  "extends": "@kununu/stylelint-config",
  "rules": {
    "indentation": "tab"
  }
}
```
