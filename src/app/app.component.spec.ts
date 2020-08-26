import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it(`should have as title 'test-tests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-tests');
  });
});
