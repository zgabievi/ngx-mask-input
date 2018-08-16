# ngx-mask-input

Library helps you to prevent users from **writing** or **pasting** values in inputs, that you don't want to allow. You can pass regular expression to your inputs "mask" attribute, and the things will be managed by itself.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Changelog](#changelog)
- [Contributing](#contributing)
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

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [Zura Gabievi](https://github.com/zgabievi)
- [Giorgi Kvirikashvili](https://github.com/kvirrik)
- [All contributors](https://github.com/zgabievi/ngx-mask-input/graphs/contributors)

## License

The MIT License (MIT). Please see [License file](LICENSE) for more information.
