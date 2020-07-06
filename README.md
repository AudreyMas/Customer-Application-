# CustomerApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



SECTION 2 : Best practise to naming => Guide convention of Angular 

*Component as UI(html) as style (css) and code behind
  1. Creation of UI : 
      -view.html : creation of balise : 3 
      - model.ts : 3 properties 
      - add model to the component.ts
  2. Binding to the ui from the component with the customer Model with directives : syntaxe to help to communication with the componenet / change de dispaly ...
    - Ex ngModel 
  3. Expressions
    - To display data on the UI 
  4. Create a colletion to customer and display below the input
    - create the click on the input button: (clicke)="Add"
    -CustomerModels : Array = the collection of the customer
    - create the Add() function which push to the Customer Models + Create a new customer on the Model
  5. Display the collection (CustomerModels): *ngFor= let cust of CustomerModels () 
  6. Package.lock.json 


  SECTION 3 : Multiple pages + routing + routing 
  1. Create a Master page (logo-home-customer-supplier-footer) =>  4 UI Masterpage - Home Pgae - Customer UI - Supplier
  
  SECTION 4 : 
  1. Lazy loading: = Load on demand
    - Change de architecture : 3 modules instill 1 module
    - Folder with 3 Routing files
    - in which files add loadchildren
    - CommonModule : 
      * Removed de BrowserModule from some Componenet

SECTION 5 : Validation //// Form in UI in the other course in UDEMY Front to Back with directives [disabled], #clientForm="ngForm",class="form-groupe", class="form-control", [ngClass]="isInvalid : 
1. Validation 
  - In the models files integrate : 
    *{NgForm,FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms
    - Using Angular validation = 3 C process (Create , Connect and Check) :
      *CREATE: we create the validation object model (FormGroup, FormControl and Validators)
      *Connect: connect the validation to the UI 
      *Check : isValid, IsDirty....? 
    - Creating Validation : 
      1.formGroup and the model file in the consturctor{}
      2.control --> validation = this.formGroup.addControl ("CustomerNameControl)
  2. Display Erros 
    -Creat div tags with some messages :
      * [hidden]="
  
  3. Dirty flag = *ngIf if missed something so show the message error (.dirty)
  4. Centralization of validation error for reusability
    - ex: hasError(typeofvalidator, controlname: boolean)

SECTION 6 : Dependency Injection (DI) and Providers
1. Good Architecture : 
  - Implement the inetrface in folder: Utility .
  - In the file when integrate an Interface integrate the method too !
2. In the Logger file we have a differents classes.
3. Providers : Pass things to components 
  - Create the provider at the mainModul =  //// SERVICES in the other courses  
  - Interface : syntax sugar in typescript not from javascript
4. Centralize and Conditional DI 
  - Injector and  tokens (conditional DI): 
  - Create a provider collection = providerscoll 

  =>: Architecture = Providers and clients (consume the services). WIth class(= SERVICES) linked to tokens 


SECTION 7 : Create user control by using input, output and event emitters:
  - user control : reusable cmponenet 
  - events = where the data will travel throught the output
  1. Creation of user control: The intercation with the VIEW component through the input and output
    - 3 layers : UI(grid html) - code behind componenet(gridComponent) - Model (customer + supplier)
  2. Good practices with grid: 
    - Setters (pass the data) and getters
  3. Connection with GridComponenet and CustomerAppComponent = CustomerAppComponent HTML 
    - [] = data comes from outside to the inside
    - () = data comes from inside to the outside
  4. Import the grid componenet to the customer Module

  SECTION 8 : 
  1. Install npm json server = a fake server for http calls (https://github.com/typicode/json-server)
    - to start the json server : json-server --watch db.json

    ==> the data => http://localhost:3000/customers

  2. Create a call to the localhost:3000 to show the data
    -JSON-SERVER : increment autmaticaly the data from the input.
    - Json server don't send all the collection so => create a GET call 
    - HTTPCLIENTMODULE
  
  3. Interceptors in HttpClient : help to inject pre processur object before call a POST or a GET
   - The 'securitykey': 'key123' will be send whith a POST or a GET

   4. The double data post 
    - Add a Delay : json-server --watch --delay5000 db.json

   SECTION 9 :  Integration of MVC Visual studio with Angular
   1. ASP.NET