# endiliey.github.io
This is a static personal website for Endilie Yacop Sucipto

![Preview](preview.PNG)

# Installation

Clone the repository
```
git clone https://github.com/endiliey/endiliey.github.io.git
```

Install dependencies
```
cd endiliey.github.io
yarn install
```

## Running locally
It will be available on localhost:3000
```
cd website
yarn start
```

## Publishing to GitHub pages

Build the files
```
cd website
yarn run build
```

Publish (only endiliey can publish)
```
GIT_USER=endiliey CURRENT_BRANCH=source USE_SSH=true yarn run publish-gh-pages
```

Note that this website is built with [Docosaurus](https://docusaurus.io/),
a Facebook open-source project in which I'm also a contributor
