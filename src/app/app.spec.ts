import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render image', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const img: HTMLImageElement = fixture.nativeElement.querySelector('.brand-logo');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toContain('assets/images/logo.svg');
  });
});
