const readline = require('readline');

const DEFAULT_OPTIONS = {
  input: process.stdin,
  output: process.stdout,
}

function ask(questions, {input, output, destroy, ...rest} = {}, onFinally) {
  const interfaceInput = input || process.stdin;
  const interfaceOutput = output || process.stdout;
  const interfaceOptions = {...rest, input: interfaceInput, output: interfaceOutput};
  const rl = readline.createInterface(interfaceOptions);

  let answers = []

  function askQuestion(question) {
    return new Promise(resolve => {
      rl.question(question, (answer) => resolve(answer));
    })
  }

  function handleCleanup() {
    if ((!input && destroy) || destroy) process.stdin.destroy();
    if ((!output && destroy) || destroy) process.stdout.destroy();
    if (onFinally) onFinally();
  }

  return new Promise(async resolve => {
    for (const question of questions) {
      answers= [...answers, await askQuestion(question)];
    }

    handleCleanup()
    resolve(answers);
  })
}

module.exports = ask;