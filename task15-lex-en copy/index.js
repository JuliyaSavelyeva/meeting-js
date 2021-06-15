const createLogger = () => {
  // lex env:
  // {
  // warn
  // error
  // log
  // getRecords
  // messages
  // }
  const messages = [];

  function warn(stringWarn) {
    messages.push({ message: stringWarn, dateTime: new Date(), type: 'warn' });
  }

  // input: string
  // output: undefined
  function error(stringError) {
    messages.push({
      message: stringError,
      dateTime: new Date(),
      type: 'error',
    });
  }
  function log(stringLog) {
    messages.push({
      message: stringLog,
      dateTime: new Date(),
      type: 'log',
    });
  }

  // input: string
  // output: array
  function getRecords(text) {
    // eslint does work
    // remove ifs
    // duplicate
    // reduntant variables

    return (text ? messages.filter(message => message.type === text) : [...messages]).sort(
      (a, b) => b.dateTime - a.dateTime,
    );
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger1 = createLogger();
console.log(logger1);
logger1.error('messages');
logger1.error('hello');
logger1.log('some log');

console.log(logger1.getRecords('log'));
