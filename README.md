# reactjs-extended

## About
Extended CLI for ReactJs repetative task like creating dumb component, smart component, etc.

Feature:
* Doesn`t need to be installed along with your project dependency.
* Can create typescript, javascript based smart component.
* Can create typescript, javascript based dumb component.

More features to be added in future.
<br/>&nbsp;

## Installation
Global installation
```shell
npm install reactjs-extended -g
```
Note: Doesn`t require to be installed as a dependency in your project
<br/>&nbsp;

## Flags Available
<table>
  <tr>
    <td>Flag</td>
    <td>Possible Value</td>
    <td>Default Value</td>
  <tr>
  <tr>
    <td><b>--name</b></td>
    <td>any valid name, lower camel case is preferred</td>
    <td>default</td>
  </tr>
  <tr>
    <td><b>--dumb *</b></td>
    <td>true, false</td>
    <td>false</td>
  </tr>
</table>
<br/>
* optional flag

<br/>&nbsp;

## Usage
Once globally installed. Based on your requirement, it can be used in following ways:

* If you want to generate <b>typescript</b> based component, use below command -
```shell
re-ts-component --name=componentName
```

* If you want to generate <b>javascript</b> based component, use below command -
```shell
re-js-component --name=componentName
```

* Use of <b>dumb</b> flag is optional and can be as follow -
```shell
re-js-component --name=componentName --dumb=true
```

<br/>&nbsp;

## Output
* A folder will be created based on name flag value. It will treated as component name.
* Based on command run, file generated will be either typescript (tsx, ts) or javascript (jsx, js).
* Following file will be generated based on the command used -
> <b>re-ts-component</b>:  Action, Component, Constant, Container, Helper, Model, Query, Reducer<br/>
> <b>re-ts-component, dumb</b>:  Component, Constant, Helper<br/>
> <b>re-js-component</b>: Action, Component, Constant, Container, Helper, Query, Reducer<br/>
> <b>re-js-component, dumb</b>:  Component, Constant, Helper <br/>

<br/>&nbsp;

## Contact
* Author: Subhendu Kumar Sahoo
* Email: smaro.nitr@gmail.com
* Website: https://smaro-nitr.github.io
* Always welcome for a bugfix, feature suggestion, and feedback