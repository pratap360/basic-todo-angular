# Todo List Application

A simple Angular todo list application with local storage persistence and filtering capabilities.

## Angular Version

**Angular 20.0.3**

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   ng serve
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4200/`

## Features

- ✅ Add new tasks with input validation
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Filter tasks (All, Active, Completed)
- ✅ Data persistence with LocalStorage
- ✅ Responsive design

## LocalStorage and Services Implementation

### LocalStorage Service
Created a dedicated `LocalStorage` service that handles all browser storage operations:
- `setTodos()` - Saves todo array to localStorage
- `getTodos()` - Retrieves todos from localStorage
- `deleteTodos()` - Clears localStorage

### TodoService (Shared State)
Implemented a centralized `TodoService` using RxJS BehaviorSubject for state management:
- **Reactive Data Flow**: Components subscribe to `todos$` observable
- **Real-time Updates**: When one component modifies data, all subscribed components update automatically
- **Single Source of Truth**: All todo operations go through this service
- **Automatic Persistence**: Every change is automatically saved to localStorage

### Component Communication
- `CreateTodos` component adds new tasks
- `ShowTodo` component displays and manages existing tasks
- Both components stay synchronized through the shared TodoService

### Data Structure
Using TypeScript interface for type safety:
```typescript
interface Todo {
  todoId: number;
  todoName: string;
  isDone: boolean;
}
```

This architecture ensures data consistency, automatic persistence, and seamless component communication.