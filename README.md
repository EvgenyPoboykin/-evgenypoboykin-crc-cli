# Create React Components CLI

## Install

```bash

npm i @evgenypoboykin/crc-cli

```

## Use

```bash

crc-cli

```

## crc-cli.json

1. "components" - path/to/directory/where/storage/components/
2. "format" - script format js/tsx
3. "style" - style format styled-components/css/scss

## Commands

1. Default create Component with crc-cli.json settings

```bash

crc-cli NameComponent

```

2. '-i' , '--init' - create config file crc-cli.json and add script in package.js.

```bash

crc-cli -i

```

#### Default scripts

```json

"cc": "crc-cli"

```

3. '-s' , '--projectsettings' - add project settings in package.json (React + Electron)

```bash

crc-cli -s

```

4. '-r' , '--remove' - remove component

```bash

crc-cli NameComponent -r

```

5. '-l' , '--logic' - add logic file for component

```bash

crc-cli NameComponent -l

```
