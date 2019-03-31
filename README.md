# el-journal
Электронный журнал

#### Использованные технологии:
* React
* Redux
* styled-components
* Axios
* Node.js
* PostreSQL

## Иформация для разработчиков:
### Frontend:
#### Naming convention:
* For Components: Names of components should be in PascalCase and there is no any dashes is going to be used. Avoid repetition of directories and components. (e.g. user/Form.jsx, NOT - user/UserForm.jsx).
* For Directories: Same PascalCase

#### Directories Structure:
* Component(Container) folders are divided by app sections. In which, it will have [containers, components, styled, redux].
* Shared folder contains hocs and other components, those are going to be used in multiple containers.
* Utils directory contains utlities.

## Types of directories
* ##### Containers are stateful components, those are going to contain other functional-dumb components.
* ##### Components folder contains functional or dumb components related to certain section of app.
* ##### Styled folder will contain styled-wrapper components.
* ##### Redux directory contains, all things related to redux.
