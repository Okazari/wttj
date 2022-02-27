# wttj - Demo website

This is a small demo website using `Welcome to the jungle` API and design-system component kits.

## Start the project

All you need to do is :

- `yarn`
- `yarn start`

A server will be started on `localhost:3000`

## What's in ?

This project include the following

### Features

- Display a list of jobs
- Jobs can be filtered using the search input
- Jobs can be grouped by job type, office or department.
- Jobs can be applied
- You can view job detail by using the "see more..." link

### Tech

Project has been bootstrap using `vite`

#### Standard setup

- `prettier`
- `typescript`
- `eslint`
- `jest`
- `github actions`

#### Notable dependencies

- `welcome-ui`
- `lodash`
- `react-use`
- `msw`

### Testing strategy

I took the time to experiment with a new strategy (for me).
I used `msw` along with `jest` to try some "integration" tesing only by mocking the network layer. I didn't bother splitting those tests into smaller file, but that would have been on my todo list.

I'm not familiar with cypress, but after that test i'm pretty sure cypress would be more convenient for that kind of test.

My usual strategy is not including end-to-end tests and is only using unit test everything in an isolated way (mocking every dependencies). I really feel the needs of end-to-end tests (or at least integration ones) to spot dead code using coverage.

I always makes a 100% coverage, but not only by adding test. Also by removing unnecessary code.

### Remaining tasks

- Investigate on modal hide/show testing that ain't working as expected.
- Investigate on some typescript types issues.
- Adds a routing library to both manage modals with a single instance and add deep-linking capabilities to the app (so that if user refresh it will re-open modal).
- Small visual glitch with the "reveal on scroll" animation when reaching the very end of the list.
- Deploy app on CleverCloud.
