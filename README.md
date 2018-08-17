# ngx-mask-input

[![NPM Version](https://img.shields.io/npm/v/ngx-mask-input.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mask-input)
[![NPM Size + Gzip](https://img.shields.io/bundlephobia/minzip/ngx-mask-input.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mask-input)
[![NPM Downloads](https://img.shields.io/npm/dt/ngx-mask-input.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mask-input)
[![NPM License](https://img.shields.io/npm/l/ngx-mask-input.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mask-input)


Library helps you to prevent users from **writing** or **pasting** values in inputs, that you don't want to allow. You can pass regular expression to your inputs "mask" attribute, and the things will be managed by itself.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Changelog](#changelog)
- [Paperwork](#paperwork)
  - [Contributing](#contributing)
  - [Issue / Feature Request](#issue--feature-request)
  - [Pull Request](#pull-request)
- [Credits](#credits)
- [License](#license)

## Installation

```bash
npm install --save ngx-mask-input
```

```bash
yarn add ngx-mask-input
```

## Usage

**app.module.ts**

```ts
import { NgModule } from '@angular/core';
import { NgxMaskInputModule } from 'ngx-mask-input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ NgxMaskInputModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

**app.component.html**

```html
<!-- Allow only numbers -->
<input type="text" mask="[0-9]">

<!-- Allow only lowercase letters -->
<input type="text" mask="[a-z]">

<!-- Allow only latin letters, numbers and underscore -->
<input type="text" mask="[a-zA-Z0-9_]">
```

## Changelog

Please see [Changelog Page](https://github.com/zgabievi/ngx-mask-input/releases) for more information what has changed recently.

## Paperwork

### Contributing

Please see [CONTRIBUTING.md](https://github.com/zgabievi/ngx-mask-input/blob/master/CONTRIBUTING.md) for details.

### Issue / Feature Request

To submit an issue correctly, please follow [instructions](https://github.com/zgabievi/ngx-mask-input/blob/master/.github/ISSUE_TEMPLATE.md#bug-report)

If you have an idea, and you want to request feature, then read [this one](https://github.com/zgabievi/ngx-mask-input/blob/master/.github/ISSUE_TEMPLATE.md#feature-request)

### Pull Request

To crearte new pull request and add your piece of work in our project, go through this [steps](https://github.com/zgabievi/ngx-mask-input/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

## Credits

- [Zura Gabievi](https://github.com/zgabievi)
- [Giorgi Kvirikashvili](https://github.com/kvirrik)
- [All contributors](https://github.com/zgabievi/ngx-mask-input/graphs/contributors)

## License

The MIT License (MIT). Please see [License file](https://github.com/zgabievi/ngx-mask-input/blob/master/LICENSE) for more information.
