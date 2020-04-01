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
Use quotes to specify commands, single or double
```
multiscript 'yarn abc' "npm run def" 'echo abc'
```