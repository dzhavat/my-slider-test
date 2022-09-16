import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

export interface MySliderValue {
  min: number;
  max: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'my-slider',
  templateUrl: './my-slider.component.html',
})
export class MySliderComponent {
  @Input() min = 0;

  @Input() max = 100;

  @Input() step = 1;

  @Input() customSteps: number[] = [];

  @Input() value: MySliderValue = { min: this.min, max: this.max };

  @Output() valueChange = new EventEmitter<MySliderValue>();

  constructor() {
    this.triggerTests();
  }

  get options(): Options {
    return {
      floor: this.min,
      ceil: this.max,
      minRange: 1,
      hideLimitLabels: true,
      hidePointerLabels: true,
      enforceStep: false,
      enforceStepsArray: false,
      step: this.step,
      stepsArray: this.customSteps.map((value) => ({ value })),
    };
  }

  private triggerTests(): void {
    console.log('Change so tests can run');
  }

  onChange(value: MySliderValue) {
    this.value = value;
    this.valueChange.emit(value);
  }
}
