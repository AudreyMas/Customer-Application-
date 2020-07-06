import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
// What a user expects from system
// Describe when your application 
//'It' is running when instance can be created
describe('AppComponent', () => {

  beforeEach(async(() => {
    //initialization for every test case = it 
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    //NOT false,0," ", undefined, null, NaN
  });

  it(`should have as title 'CustomerApplication'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CustomerApplication');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to CustomerApplication!');
  });
});
