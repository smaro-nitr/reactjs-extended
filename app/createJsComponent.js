#!/usr/bin/env node

const Helper = require('./helper')
const Constant = require('./constant')

const basePath = process.cwd()
const [...args] = process.argv
const customArgs = Helper.getCustomArgs(args)

const componentName = customArgs.name
const isDumbComponent = Boolean(customArgs.dumb)
const templateFolderName = isDumbComponent ? Constant.IO.jsDumbTemplateFolder : Constant.IO.jsTemplateFolder

Helper.generateComponentFolder(basePath, componentName)
Helper.generateComponent(basePath, componentName, templateFolderName)
