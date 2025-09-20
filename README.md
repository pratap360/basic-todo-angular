# TodoList

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---
Please find below project details.

Project Task Details

Build a simple Angular application.
 Requirements
- [ ] Create a To-Do List app with the following features:
	- [x] Input box + Add button to add tasks
	- [ ] Each task should be displayed in a list with:
		- [x] A Complete button (toggle task as done, apply strikethrough for completed tasks)
		- [x] A Delete button to remove the task
	- [ ] Add a filter bar with three buttons:
		- [ ] All → Show all tasks
		- [ ] Active → Show only incomplete tasks
		- [ ] Completed → Show only completed tasks
	- [ ] Use a Service (TodoService) to handle task operations (add, delete, toggle, filter)
	- [x] Save tasks in LocalStorage, so they remain after a page refresh
	- [x] Fetch initial tasks from a mock API (https://jsonplaceholder.typicode.com/todos) using Angular HttpClient
	- [x] Handle API errors gracefully
- [ ] Include a README with:
	- [ ] Angular version used
	- [ ] Setup instructions (npm install, ng serve)
- [ ] Short explanation of how you handled LocalStorage and services
- [ ] Please share a GitHub repository (preferred) or zipped Angular project