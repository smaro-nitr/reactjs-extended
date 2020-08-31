# reactjs-extended

## About

Extended CLI for ReactJs repetative task like creating smart component, dumb component, etc.

Feature:

- Doesn`t need to be installed along with your project dependency.
- Can create typescript, javascript type smart class based component.
- Can create typescript, javascript type dumb function based component.
- Now in V2.0.0, it gives you the power to create custom template on your own.

More features to be added in future. Keep looking forward.
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
    <td>Mandatory</td>
  <tr>
  <tr>
    <td><b>--name</b></td>
    <td>Any valid name without space (Upper camel case is preferred)</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td><b>--template*</b></td>
    <td>TS-SMART-CLASS, TS-DUMB-FUNCTION, JS-SMART-CLASS, JS-DUMB-FUNCTION, custom-template-folder-name**</td>
    <td>Yes</td>
  </tr>
</table>
<br/>
* TS = Typescript, JS = Javascript <br />
** Give the custom template folder name after placing template in desired folder

<br/>&nbsp;

## Usage

Once globally installed. Based on your requirement, it can be used in following ways:

- To get help on this library uses, use below command -

```shell
reactjs-extended-help
```

- If you want to generate <b>typescript</b> based component, use below command -

```shell
reactjs-extended --name=ComponentName --template=TS-SMART-CLASS
```

- If you want to generate <b>javascript</b> based component, use below command -

```shell
reactjs-extended --name=ComponentName --template=JS-SMART-CLASS
```

- If you want to generate <b>custom</b> structure, use below command -

```shell
reactjs-extended  --name=ComponentName --template=template-one
```

NOTE: custom folder with template file must present in respective directory. See help for more information.

<br/>&nbsp;

## Output

- A folder will be created based on name flag value. It will treated as component name.
- Based on command run, file generated will be either typescript (tsx, ts) or javascript (jsx, js).
- Following file will be generated based on the command used -
  > <b>TS-SMART-CLASS</b>: Action, Component (class), Constant, Container, Helper, Model, Query, Reducer <br/> <b>TS-DUMB-FUNCTION</b>: Component (function), Model <br/> <b>JS-SMART-CLASS</b>: Action, Component (class), Constant, Container, Helper, Query, Reducer <br/> <b>JS-DUMB-FUNCTION</b>: Component (function) <br/><b>Custom Struture</b>: All 'XXX' keyword will be replaced by '--name' flag value<br/>

<br/>&nbsp;

## Contact

- Author: Subhendu Kumar Sahoo
- Email: smaro.nitr@gmail.com
- Website: https://smaro-nitr.github.io
- Always welcome for a bugfix, feature suggestion, and feedback
