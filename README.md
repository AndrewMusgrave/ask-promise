# askPromise

Read a directory recursively.

## Install

### NPM

```bash
npm install ask-promise
```

### Yarn

```bash
yard add ask-promise
```

## Usage

#### Sync

```js
const ask = require('ask-promise');

(async () => {
  const answers = await ask(['How are you? '])
  // => Great!
  console.log(answers) // Great!
})()
```

#### Async

```js
const ask = require('./');

ask(['How are you? '])
  // => Great!
  .then(answer => console.log(answer)); // Great!
```

## API

### ask(questions, options, onFinally)

| Param     | Type                                                                      | Default                                                       | Description                                                                                     |
| --------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| questions | string[]                                                                  |                                                               | an array of questions to ask                                                                    |
| options   | ?{input: NodeJS.ReadStrean, output: NodeJS.WriteStrean, destroy: boolean} | {input: process.stdin, output: process.stdout, destroy: true} | a set of options that includes input / output streams and whether they should be destroyed      |
| onFinally | ?(): void                                                                 |                                                               | callback to be called after the function executes. for example to clean up input/output streams |
