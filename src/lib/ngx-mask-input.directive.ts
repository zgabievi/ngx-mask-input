import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: 'input[mask]'
})
export class NgxMaskInputDirective {
  //
  @Input()
  mask = '.';

  //
  @HostListener('keypress', ['$event'])
  onKeyPress($event): boolean {
    return this.filterInput($event);
  }

  //
  @HostListener('paste', ['$event'])
  onPaste($event): boolean {
    return this.filterInput($event);
  }

  //
  private filterInput(event: any): boolean {
    const $input = event._input || event.target;

    if (event.ctrlKey || event.altKey) {
      return;
    }

    let value = null;
    let regex = null;

    switch (event._type || event.type) {
      case 'keypress':
        const pressedKey = event.charCode || event.keyCode || 0;

        if ([8, 9, 13, 35, 36, 37, 39, 46].indexOf(pressedKey) > -1) {
          if (event.charCode === 0 && event.keyCode === pressedKey) {
            return true;
          }
        }

        value = String.fromCharCode(pressedKey);
        regex = new RegExp(this.mask);
        break;

      case 'paste':
        $input.dataset.value_before_paste = event.target.value;

        setTimeout(() => {
          event._type = 'after_paste';
          event._input = $input;

          this.filterInput(event);
        }, 0);
        return true;

      case 'after_paste':
        value = $input.value;
        regex = new RegExp(`^(${this.mask})+$`);
        break;

      default:
        event.preventDefault();
        return false;
    }

    if (regex.test(value)) {
      return true;
    }

    if (event._type === 'after_paste') {
      $input.value = $input.dataset.value_before_paste;
    }

    event.preventDefault();
    return false;
  }
}
