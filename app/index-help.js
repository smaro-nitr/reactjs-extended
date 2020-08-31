#!/usr/bin/env node

const path = require('path')
const Helper = require('./helper')
const Constant = require('./constant')

console.log(Constant.COLOR.green, '\n Welcome to ReactJs-Extended Help', Constant.COLOR.reset)
console.log(Constant.COLOR.green, '================================', Constant.COLOR.reset)

console.log(Constant.COLOR.cyan, '\n\n Custom Template', Constant.COLOR.reset)
console.log(Constant.COLOR.cyan, '================ \n', Constant.COLOR.reset)
const customTemplateFolderPath = path.join(Helper.getTemplateBasePath(), 'app', 'template', 'custom')
console.log(
  Constant.COLOR.black,
  `Create a folder (ex- MyTemplate) and place your template file (ex- XXX.tsx) at this location -\n ${customTemplateFolderPath}`,
  Constant.COLOR.reset
)
console.log(
  Constant.COLOR.black,
  `\n Pass the --name flag, it will replace all 'XXX' keyword found in filename and in file content \n Pass the --template flag, it will act as folder name where library will search for template file`,
  Constant.COLOR.reset
)
console.log(
  Constant.COLOR.black,
  `(Example: --name=MyComponet ===> MyComponent.tsx, --template=MyTemplate ===> MyTemplate folder will be scan)`,
  Constant.COLOR.reset
)

console.log(Constant.COLOR.cyan, '\n\n Additional Help', Constant.COLOR.reset)
console.log(Constant.COLOR.cyan, '=============== \n', Constant.COLOR.reset)
console.log(Constant.COLOR.black, `We will be keep adding as required`, Constant.COLOR.reset)

console.log(
  Constant.COLOR.green,
  '\n\n If still any issue persist using this library, write to us at smaro.nitr@gmail.com',
  Constant.COLOR.reset
)
console.log(Constant.COLOR.green, 'Thanks for using this library', Constant.COLOR.reset)
