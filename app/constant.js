const COLOR = {
  black: '\x1b[90m',
  blue: '\x1b[94m',
  cyan: '\x1b[96m',
  dim: '\x1b[2m',
  green: '\x1b[92m',
  magenta: '\x1b[95m',
  red: '\x1b[91m',
  reset: '\x1b[0m',
  yellow: '\x1b[93m'
};

const IO = {
  jsDumbTemplateFolder: 'js-dumb-component',
  jsTemplateFolder: 'js-component',
  tsDumbTemplateFolder: 'ts-dumb-component',
  tsTemplateFolder: 'ts-component',
};

const MESSAGE = {
  alreadyExist: 'Component with similar name already exist',
  standardError: 'Something went wrong',
  created: 'Created ... '
};

module.exports = { COLOR, IO, MESSAGE };
