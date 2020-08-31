const fs = require('fs')
const path = require('path')

const Constant = require('./constant')

const getCustomArgs = (args) => {
  const customArgs = {}

  Array.isArray(args) &&
    args.forEach((eachArg) => {
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

const validateCustomArgs = (customArgs) => {
  let isValid = true
  Constant.ARGS.argsList.forEach((item) => {
    const { key, mandatory, errorMsg } = item
    if (mandatory && !customArgs[key]) {
      console.log(Constant.COLOR.red, errorMsg, Constant.COLOR.reset)
      isValid = false
    }
  })
  return isValid
}

const getTemplateBasePath = () => {
  const npmGlobalPath = process.env.npm_config_prefix || process.env.dp0
  const templateBasePath = path.join(npmGlobalPath, 'node_modules', 'reactjs-extended')
  return templateBasePath
}

const getTemplateFolderDetail = (componentTemplate) => {
  let name = ''
  let isCustom = false
  switch (componentTemplate) {
    case Constant.ARGS.template.tsSmartClass:
      name = Constant.IO.tsSmartTemplateFolder
      break
    case Constant.ARGS.template.tsDumbFunction:
      name = Constant.IO.tsDumbTemplateFolder
      break
    case Constant.ARGS.template.jsSmartClass:
      name = Constant.IO.jsSmartTemplateFolder
      break
    case Constant.ARGS.template.jsDumbFunction:
      name = Constant.IO.jsDumbTemplateFolder
      break
    default:
      name = componentTemplate
      isCustom = true
      break
  }

  return { name, isCustom }
}

const generateComponentFolder = (targetBasePath, componentName = 'Default') => {
  const outputFolderPath = path.join(targetBasePath, componentName)

  if (fs.existsSync(outputFolderPath)) {
    console.log(Constant.COLOR.red, Constant.MESSAGE.alreadyExist, Constant.COLOR.reset)
    process.exit()
  }

  fs.mkdirSync(outputFolderPath)
}

const generateComponent = (targetBasePath, componentName, componentTemplate) => {
  const { name, isCustom } = getTemplateFolderDetail(componentTemplate)
  const componentTemplateFolderPath = path.join(
    getTemplateBasePath(),
    'app',
    'template',
    isCustom ? 'custom' : 'component',
    name
  )

  if (isCustom && !fs.existsSync(componentTemplateFolderPath)) {
    const errorMsg = `${Constant.MESSAGE.customTemplateFolder} at ${componentTemplateFolderPath}`
    console.log(Constant.COLOR.red, errorMsg, Constant.COLOR.reset)
    process.exit()
  }

  const componentTemplateFileName = []
  fs.readdirSync(componentTemplateFolderPath).forEach((file) => {
    componentTemplateFileName.push(file)
  })

  componentTemplateFileName.forEach((eachFileName) => {
    const eachFileInputPath = path.join(componentTemplateFolderPath, eachFileName)
    const eachFileContent = fs.readFileSync(eachFileInputPath, 'utf8')

    const eachFileNewName = eachFileName.replace(/XXX/g, componentName)
    const eachFileNewContent = eachFileContent.replace(/XXX/g, componentName)

    const eachFileOutputPath = path.join(targetBasePath, componentName, eachFileNewName)
    fs.writeFile(eachFileOutputPath, eachFileNewContent, function (err) {
      if (err) console.log(Constant.COLOR.red, Constant.MESSAGE.standardError, Constant.COLOR.reset)
      console.log(Constant.COLOR.green, `${Constant.MESSAGE.created} ${eachFileOutputPath}`, Constant.COLOR.reset)
    })
  })
}

const exportModule = {
  getCustomArgs,
  validateCustomArgs,
  generateComponentFolder,
  generateComponent,
  getTemplateBasePath,
}

module.exports = exportModule
