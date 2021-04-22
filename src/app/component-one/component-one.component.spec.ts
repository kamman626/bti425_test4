import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOneComponent } from './component-one.component';

describe('ComponentOneComponent', () => {
  let component: ComponentOneComponent;
  let fixture: ComponentFixture<ComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must have at least 1 paragraph', () => {
    let pElements = fixture.nativeElement.querySelectorAll('p')
    expect(pElements.length).toBeGreaterThan(0);
  });

  it('The "greeting" must read: "Hello"',()=>{
    let greetingElement = fixture.nativeElement.querySelector('p.greeting');
    expect(greetingElement.textContent).toEqual('Hello');
  });

  it('Sets x to 1 when "myButton" is clicked', () => {
    let button = fixture.nativeElement.querySelector('button.myButton');
    expect(button).toBeTruthy();

    button.click();

    fixture.whenStable().then(() => {
      expect(component.x).toBe(1);
    });
  });


});
