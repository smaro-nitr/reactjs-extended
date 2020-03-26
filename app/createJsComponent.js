#!/usr/bin/env node

const Helper = require('./helper')
const Constant = require('./constant')

const [...args] = process.argv
const customArgs = Helper.getCustomArgs(args)

const componentName = customArgs.name
const isDumbComponent = Boolean(customArgs.dumb)
const templateFolderName = isDumbComponent ? Constant.IO.jsDumbTemplateFolder : Constant.IO.jsTemplateFolder

const targetBasePath = process.cwd()

Helper.generateComponentFolder(targetBasePath, componentName)
Helper.generateComponent(targetBasePath, componentName, templateFolderName)
