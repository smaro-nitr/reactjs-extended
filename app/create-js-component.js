#!/usr/bin/env node

const Helper = require('./helper')

const [...args] = process.argv
const customArgs = Helper.getCustomArgs(args)

const componentName = customArgs.name
const componentType = customArgs.type
const templateFolderName = Helper.getTemplateFolderName(componentType, true)

const targetBasePath = process.cwd()

Helper.generateComponentFolder(targetBasePath, componentName)
Helper.generateComponent(targetBasePath, componentName, templateFolderName)
