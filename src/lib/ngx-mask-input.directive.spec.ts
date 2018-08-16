import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxMaskInputDirective } from './ngx-mask-input.directive';

@Component({
  template: `<input type="text" mask="[0-9]">`
})
class TestMaskInputComponent {}

const CustomEvent = (value: string, keyCode: number, callback: any, type = 'keypress') => {
  return {
    type,
    target: {
      value,
      dataset: {}
    },
    keyCode,
    preventDefault() {
      callback();
    }
  };
};

describe('NgxMaskInputDirective', () => {
  let fixture: ComponentFixture<TestMaskInputComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestMaskInputComponent, NgxMaskInputDirective]
    });

    fixture = TestBed.createComponent(TestMaskInputComponent);
    inputEl = fixture.debugElement.query(By.css('input'));

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(new NgxMaskInputDirective()).toBeTruthy();
  });

  it('do not enter aything if it does not match regex', () => {
    let prevented = false;

    const event = CustomEvent('a', 65, () => {
      prevented = true;
    });

    inputEl.triggerEventHandler('keypress', event);
    fixture.detectChanges();
    expect(prevented).toBe(true);
  });

  it('allow to write letters that match regex', () => {
    let prevented = false;

    const event = CustomEvent('9', 57, () => {
      prevented = true;
    });

    inputEl.triggerEventHandler('keypress', event);
    fixture.detectChanges();
    expect(prevented).toBe(false);
  });

  it('allow to paste valid characters', () => {
    let prevented = false;

    const event = CustomEvent('123', 0, () => {
      prevented = true;
    }, 'paste');

    inputEl.triggerEventHandler('paste', event);
    fixture.detectChanges();
    expect(prevented).toBe(false);
  });
});
