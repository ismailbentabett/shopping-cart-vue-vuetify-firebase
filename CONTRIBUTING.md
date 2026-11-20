# Contributing

Thanks for your interest in improving **Shopping Cart**. Contributions of all sizes are welcome, from typo fixes to new features on the [roadmap](README.md#-roadmap).

By participating you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Ground rules

- Search [existing issues](https://github.com/ismailbentabett/shopping-cart-vue-vuetify-firebase/issues) before opening a new one.
- For larger changes, open a feature request first so the approach can be discussed.
- Keep pull requests focused: one logical change per PR.
- Never commit Firebase service-account keys, passwords or other secrets.

## Development setup

The application lives in the `shop/` directory.

```bash
git clone https://github.com/ismailbentabett/shopping-cart-vue-vuetify-firebase.git
cd shopping-cart-vue-vuetify-firebase/shop
npm install
npm run serve
```

To work against your own backend, create a Firebase project and point `shop/src/firebase/init.js` at it (see [Configuration](README.md#%EF%B8%8F-configuration)).

## Available scripts

Run these from `shop/`:

| Command | Description |
| --- | --- |
| `npm run serve` | Start the dev server with hot reload |
| `npm run build` | Production build into `shop/dist` |
| `npm run lint` | Lint and auto-fix with ESLint (`plugin:vue`) |

A `lint-staged` pre-commit hook (via Vue CLI's `gitHooks`) lints staged `.js`, `.jsx` and `.vue` files.

## Workflow

1. Fork the repository and create a branch from `master`:
   `git checkout -b feat/short-description`
2. Make your changes and keep the existing code style (Vue 2 Options API, Vuetify components).
3. Run `npm run lint` and `npm run build` in `shop/`.
4. Commit using [Conventional Commits](https://www.conventionalcommits.org/), for example:
   - `feat: add cart drawer`
   - `fix: refresh product list after delete`
   - `docs: clarify Firebase setup`
5. Push your branch and open a pull request using the template.

## Reporting bugs and requesting features

Use the [issue templates](https://github.com/ismailbentabett/shopping-cart-vue-vuetify-firebase/issues/new/choose). For security issues, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.
