# multiscript
Run multiple commands simultaneously. Recursively pipe stdout to process, pipe stdin to each process.

## Installation
```
npm install --dev multiscript
```
or
```
yarn add --dev multiscript
```

## Usage
Use comma seperated scripts
```
multiscript yarn abc, npm run def, echo abc
```