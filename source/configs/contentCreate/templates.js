const styleImport = (style) => {
    if (style === 'styled-components') {
        return `import { Container } from './style';`;
    } else if (style === 'css') {
        return `import './style.css';`;
    } else if (style === 'scss') {
        return `import './style.scss';`;
    }
};
const Interfaces = () => {
    return ['interface IContainer{};'].join('\n');
};

const styleFile = (style, name) => {
    if (style === 'styled-components') {
        return [`import styled from 'styled-components';`, 'import {IContainer} from "./interfaces";', '', 'export const Container = styled.div.attrs({ className: "' + name + '__container" })' + '``;'].join('\n');
    } else if (style === 'css') {
        return [`.${name}__container{`, '   ', '}'].join('\n');
    } else if (style === 'scss') {
        return [`.${name}__container{`, '   ', '}'].join('\n');
    }
};
const styleTag = (style, name) => {
    if (style === 'styled-components') {
        return `<Container></Container>`;
    } else if (style === 'css') {
        return `<div className='${name}__container' ></div>`;
    } else if (style === 'scss') {
        return `<div className='${name}__container' ></div>`;
    }
};

const index = (name) => {
    return [`import ${name} from './${name}';`, `export default ${name};`].join('\n');
};

const componentJsWithoutLogic = (name, style) => {
    return [`import React, { memo } from 'react';`, styleImport(style), '', `const ${name} = memo(() => {`, `    return ${styleTag(style, name)};`, `});`, `export default ${name};`].join('\n');
};
const componentJsWithLogic = (name, style) => {
    return [`import React, { memo } from 'react';`, `import ${name}_Logic from './logic';`, styleImport(style), '', `const ${name} = memo(() => {`, `    const [] = ${name}_Logic();`, `    return ${styleTag(style, name)};`, `});`, `export default ${name};`].join('\n');
};
const componentTsWithoutLogic = (name, style) => {
    return [`import React, { memo } from 'react';`, styleImport(style), 'import {} from "./interfaces";', '', `const ${name} : React.FC = memo(() => {`, `    return ${styleTag(style, name)};`, `});`, `export default ${name};`].join('\n');
};
const componentTsWithLogic = (name, style) => {
    return [`import React, { memo } from 'react';`, `import ${name}_Logic from './logic';`, styleImport(style), 'import {} from "./interfaces";', '', `const ${name} : React.FC = memo(() => {`, `    const [] = ${name}_Logic();`, `    return ${styleTag(style, name)};`, `});`, `export default ${name};`].join('\n');
};

const logicCode = (name) => {
    return [`import { useCallback } from 'react';`, '', `const ${name}_Logic = () => {`, '   ', '   // Logic ${name} START', '', '    // Logic ${name} END', '', '    return [];', '};', '', `export default ${name}_Logic;`].join('\n');
};

module.exports = { index, componentJsWithoutLogic, componentJsWithLogic, componentTsWithoutLogic, componentTsWithLogic, styleFile, logicCode, Interfaces };
