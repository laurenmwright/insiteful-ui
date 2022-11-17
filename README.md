# Insiteful UI Component Library

This is component library exposes some styled components for you to utilize in your projects.

## Theming

Colors on elements are added through css variables, and components are styled with Tailwindcss.

You can override the variables to adjust the theme:

```
--color-primary // Defaults to #46A689
--color-secondary // Defaults to #E0C591
--color-gray-lightest // Defaults to #d6d3d1
--color-gray-lighter // Defaults to #959595
--color-gray-light // Defaults to #78716c
--color-gray-medium // Defaults to #666
--color-gray-dark // Defaults to #333
--color-gray-darker // Defaults to #292524
--color-gray-darkest // Defaults to #1c1917
--color-action-blue // Defaults to #2F77EE
--color-success-light // Defaults to #86CCA4
--color-success-dark // Defaults to #0E4325
--color-error-light // Defaults to #fca5a5
--color-error-medium // Defaults to #dc2626
--color-error-dark // Defaults to #7f1d1d
--color-editor-dark-purple // Defaults to #4945FF
--color-editor-medium-purple // Defaults to #928fff
--color-editor-light-purple // Defaults to #dbdaff

--common-font // Defaults to `'Courier New', Courier, monospace`
```

## Contributing

You can contribute to this project. Fork it, make your changes, and put up a PR.

### Environment set up

Install dependencies with npm:

```
npm i
```

### Running

You can spin up a local server to test components with storybook:

```bash
npm run storybook
```

Runs the storybook in the development mode.\
Open [http://localhost:6006]

You can also run the local react app:

```bash
npm start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Publishing changes

To publish the latest changes, follow these steps:

1. Update the version number according to your change (Since we are still not full release, use `npm run version minor` for breaking changes, `npm run version patch` for any other changes, or choose your version number). Commit this version update **with** your changes in your PR.
1. After your changes **with the version update** are merged, run `npm run publish` on the branch being published.
