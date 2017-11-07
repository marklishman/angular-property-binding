import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property.component';
import { ExpressionComponent } from './expression.component';
import { SyntaxComponent } from './syntax.component';
import { AttributeComponent } from "./attribute.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PropertyComponent,
        ExpressionComponent,
        SyntaxComponent,
        AttributeComponent
      ],
    }).compileComponents();
  }));
  it(`should have some tests`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // test here
  }));
});
