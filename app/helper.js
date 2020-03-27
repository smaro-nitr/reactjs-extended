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

const getTemplateBasePath = () => {
  const npmGlobalPath = process.env.npm_config_prefix || process.env.dp0
  const templateBasePath = path.join(npmGlobalPath, 'node_modules', 'reactjs-extended')
  return templateBasePath
}

const getTemplateFolderName = (componentType, isJsVariant = false) => {
  switch (componentType) {
    case Constant.ARGS.type.sub:
      templateFolderName = isJsVariant ? Constant.IO.jsSubTemplateFolder : Constant.IO.tsSubTemplateFolder
      break
    case Constant.ARGS.type.dumb:
      templateFolderName = isJsVariant ? Constant.IO.jsDumbTemplateFolder : Constant.IO.tsDumbTemplateFolder
      break
    default:
      templateFolderName = isJsVariant ? Constant.IO.jsTemplateFolder : Constant.IO.tsTemplateFolder
      break
  }

  return templateFolderName
}

const generateComponentFolder = (targetBasePath, componentName = 'Default') => {
  const outputFolderPath = path.join(targetBasePath, componentName)

  if (fs.existsSync(outputFolderPath)) {
    console.log(Constant.COLOR.red, Constant.MESSAGE.alreadyExist, Constant.COLOR.reset)
    process.exit()
  }

  fs.mkdirSync(outputFolderPath)
}

const generateComponent = (targetBasePath, componentName = 'Default', templateFolderName) => {
  const componentTemplateFolderPath = path.join(getTemplateBasePath(), 'app', 'template', templateFolderName)

  const componentTemplateFileName = []
  fs.readdirSync(componentTemplateFolderPath).forEach(file => {
    componentTemplateFileName.push(file)
  })

  componentTemplateFileName.forEach(eachFileName => {
    const eachFileInputPath = path.join(componentTemplateFolderPath, eachFileName)
    const eachFileContent = fs.readFileSync(eachFileInputPath, 'utf8')

    const eachFileNewName = eachFileName.replace(/XXX/g, componentName)
    const eachFileNewContent = eachFileContent.replace(/XXX/g, componentName)

    const eachFileOutputPath = path.join(targetBasePath, componentName, eachFileNewName)
    fs.writeFile(eachFileOutputPath, eachFileNewContent, function(err) {
      if (err) console.log(Constant.COLOR.red, Constant.MESSAGE.standardError, Constant.COLOR.reset)
      console.log(Constant.COLOR.green, `${Constant.MESSAGE.created} ${eachFileOutputPath}`, Constant.COLOR.reset)
    })
  })
}

const exportModule = {
  getCustomArgs,
  getTemplateFolderName,
  generateComponentFolder,
  generateComponent
}

module.exports = exportModule
