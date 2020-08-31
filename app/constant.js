const ARGS = {
  argsList: [
    { key: 'name', mandatory: true, errorMsg: '--name flag is required' },
    { key: 'template', mandatory: true, errorMsg: '--template flag is required' },
  ],
  template: {
    jsSmartClass: 'JS-SMART-CLASS',
    jsDumbFunction: 'JS-DUMB-FUNCTION',
    tsSmartClass: 'TS-SMART-CLASS',
    tsDumbFunction: 'TS-DUMB-FUNCTION',
  },
}

const COLOR = {
  black: '\x1b[90m',
  blue: '\x1b[94m',
  cyan: '\x1b[96m',
  dim: '\x1b[2m',
  green: '\x1b[92m',
  magenta: '\x1b[95m',
  red: '\x1b[91m',
  reset: '\x1b[0m',
  yellow: '\x1b[93m',
}

const IO = {
  jsSmartTemplateFolder: 'js-smart-class',
  jsDumbTemplateFolder: 'js-dumb-function',
  tsSmartTemplateFolder: 'ts-smart-class',
  tsDumbTemplateFolder: 'ts-dumb-function',
}

const MESSAGE = {
  alreadyExist: 'Component with similar name already exist',
  created: 'Created ... ',
  customTemplateFolder: 'Couldn`t find custom template',
  standardError: 'Something went wrong',
}

module.exports = { ARGS, COLOR, IO, MESSAGE }
