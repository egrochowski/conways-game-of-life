# Conway's Game of Life

> An interactive simulation of John Conway's Game of Life

## Summary

> The Game of Life is a cellular automaton created by John Conway.

## Installation

1. Clone project

```
git clone https://github.com/egrochowski/conways-game-of-life.git
```

2. cd into folder

```
cd conways-game-of-life
```

3. Download dependencies in each repository

```
npm install
```

- Or run installation script in the `root` directory

```
sh devinstall.sh
```

4. Install [Mongo](https://www.mongodb.com/docs/v4.0/administration/install-community/)

5. Start Mongo Server

```
brew services start mongodb-community
```

## Usage

1. Start server `npm start` in the `server` directory

2. Run `npm run build` or `npm run watch` to watch for changes in the `client` directory

3. Open http://127.0.0.1:3000/ in your browser

## Main Technologies

- Axios: Version 0.24.0
- Express: Version 4.17.1
- Mongoose: Version 6.0.14
- Node.js: Version 14.17.5
- React: Version 17.0.2
- MongoDB: Version 4.2.1
- Immer: Version 9.0.7
- Styled-Components: Version 5.3.3

[![celluar automaton: conways game of life](https://img.shields.io/badge/cellular%20automaton-conways%20game%20of%20life-green)](https://github.com/egrochowski/conways-game-of-life)
