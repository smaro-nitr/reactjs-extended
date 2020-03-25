const fs = require('fs')
const path = require('path')

const Constant = require('./constant')

const getCustomArgs = args => {
  const customArgs = {}

  Array.isArray(args) &&
    args.forEach(eachArg => {
      const customArgEqualToIndex = eachArg.indexOf('=')
      const removeCustomArgFlagNotion = eachArg.replace(/^--+/i, '')
      if (customArgEqualToIndex > 0 && removeCustomArgFlagNotion) {
        const argsKey = eachArg.substring(2, customArgEqualToIndex)
        const argsValue = eachArg.substring(customArgEqualToIndex + 1, eachArg.length)
        customArgs[argsKey] = argsValue
      }
    })

  return customArgs
}

const generateComponentFolder = (basePath, componentName = 'default') => {
  const outputFolderPath = path.join(basePath, componentName)

  if (fs.existsSync(outputFolderPath)) {
    console.log(Constant.COLOR.red, Constant.MESSAGE.alreadyExist, Constant.COLOR.reset)
    process.exit()
  }

  fs.mkdirSync(outputFolderPath)
}

const generateComponent = (basePath, componentName = 'default', templateFolderName) => {
  const componentTemplateFolderPath = path.join(basePath, 'app', 'template', templateFolderName)

  const componentTemplateFileName = []
  fs.readdirSync(componentTemplateFolderPath).forEach(file => {
    componentTemplateFileName.push(file)
  })

  componentTemplateFileName.forEach(eachFileName => {
    const eachFileInputPath = path.join(componentTemplateFolderPath, eachFileName)
    const eachFileContent = fs.readFileSync(eachFileInputPath, 'utf8')

    const eachFileNewName = eachFileName.replace(/XXX/g, componentName)
    const eachFileNewContent = eachFileContent.replace(/XXX/g, componentName)

    const eachFileOutputPath = path.join(basePath, componentName, eachFileNewName)
    fs.writeFile(eachFileOutputPath, eachFileNewContent, function(err) {
      if (err) console.log(Constant.COLOR.red, Constant.MESSAGE.standardError, Constant.COLOR.reset)
      console.log(Constant.COLOR.green, `${Constant.MESSAGE.created} ${eachFileOutputPath}`, Constant.COLOR.reset)
    })
  })
}

const exportModule = {
  getCustomArgs,
  generateComponentFolder,
  generateComponent
}

module.exports = exportModule