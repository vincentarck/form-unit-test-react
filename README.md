# Login Page with React
This repository uses [conventional commits](https://pages.github.com/) as directives for commits.


Built with commonly used `clean architecture`


### `Building`

#### Tech Stacks:

- ReactJS 
- Testing Library 
- TailwindCSS


### `Serving`

[Live Demo](form-ui-zot.netlify.app) 
- Deploy with netlify

### `Testing`

Builds the testing inside the `__test__` folder

Performing DOM testing on `Form` components with the scope:
- Email input should be rendered
- Email input must be empty when the DOM is first released to the browser
- Password input should be rendered
- Password input must be empty when the DOM is first released to the browser
- Button sign in should be rendered
- Email input must be changed when the user is typing in the input email field
- Password input must be changed when the user is typing in the input pasword field
- Button should not be disabled when inputs exist


Performing DOM testing on `App` components with the scope:
- Login component must be rendered
- Intro Login Component must be rendered

See the section about [testing library](https://testing-library.com/) for more information.
