#!/usr/bin/env node

const Helper = require('./helper')

const [...args] = process.argv
const customArgs = Helper.getCustomArgs(args)
const isValid = Helper.validateCustomArgs(customArgs)

if (isValid) {
  const componentName = customArgs.name
  const componentTemplate = customArgs.template
  const targetBasePath = process.cwd()
  Helper.generateComponentFolder(targetBasePath, componentName)
  Helper.generateComponent(targetBasePath, componentName, componentTemplate)
}
