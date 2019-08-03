# Gatsby Theme Picture Book

This repo is a monorepo for the `@olavea/gatsby-theme-picture-book`

It includes:

- a the theme (located in `theme/`)
- a demo site (located in `demo/`)
- a Yarn workspaces configuration so the theme and demo can be worked on simultaneously

TODO: Document coding style and more of the workflow to welcome #codenewbies.

## How to use this repo

- Clone the repo
- Run `yarn` to install dependencies
- Run `yarn workspace demo develop` to run the demo site

## How to develop for this repo

- Create a new branch `git checkout -b <your branch name>`
  - Make sure you first checkout the master branch and then pull the latest changes: `git checkout master` and then `git pull`
  - If you are working on an issue add the issue number to the branch name
  - Example: `git checkout -b shorter-theme-name-#2``
- Commit often as you go along
  - `git commit -a -m <commit message>` commits all changed files.
- Push to GitHub every now and then `git push`.
- When satisfied or in need of input create a Pull Request.
  - IMPORTANT: Do not create the pull request toward Jason's repo, but this repo!
- Make sure the Pull Request is running as it should on Netlify before merging to master.
  - If there are many small "ugly" commit do a "Squash and merge" and clean up the commit message.

## How to publish to npm

- Make sure you are in the theme folder
  - `cd theme`
- Checkout the master branch
  - `git checkout master`
- Make sure _all_ your changes are commited to the master branch
  - Either by a Pull Request being merged,
  - or by commiting sraight to master (only ok for small doc changes)
- Pull or changes into your local master branch
  - `git pull`
- Update the npm version by using `npm version`,
  - `npm version patch` for bug fixed or doc changes
  - `npm version minor` for new backward compatible changes
  - `npm version major` for non backward compatible changes
- Commit the version change to master
  - `git add .`
  - `git commit -m "v<X.Y.Z"`
  - `git push`
- Publish the new version to npm
  - `npm publish`
