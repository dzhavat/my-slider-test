import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';

import { MySliderModule } from './my-slider.module';
import { MySliderComponent } from './my-slider.component';

describe(MySliderComponent.name, () => {
  it('renders', async () => {
    @Component({
      template: `<my-slider></my-slider>`,
    })
    class TestComponent {}

    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [MySliderModule],
    });

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    const sliders = fixture.debugElement.queryAll(By.css('[role="slider"]'));

    expect(sliders).toHaveLength(2);
  });

  it('uses @testing-library', async () => {
    await render(MySliderComponent, {
      declarations: [MySliderComponent],
      imports: [MySliderModule],
    });

    expect(screen.queryAllByRole('slider')).toHaveLength(2);
  });
});
