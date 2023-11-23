# Todo App Reconciler

A TypeScript-based Todo App reconciler that efficiently updates the DOM by comparing a virtual DOM (vDOM) with the actual DOM. This reconciler is specifically designed for dynamic rendering and manipulation of a Todo list.

## Overview

A "reconciler" refers to a component responsible for managing the process of updating the user interface (UI) in response to changes in the application's state or data. The term "reconciliation" here refers to the process of determining what changes need to be made in the DOM (Document Object Model) to keep it in sync with the virtual representation of the UI(vDOM). React, in particular, uses a reconciler as part of its core architecture.

## How it Works

1. **Virtual DOM (vDOM):** The reconciler maintains a virtual DOM that mirrors the state of the Todo list.

2. **Random Todo Generation:** Every 5 seconds, a batch of randomly generated Todo items is created.

3. **Reconciliation:** The reconciler efficiently updates the actual DOM by reconciling the vDOM with the current state.

## Development

To modify the reconciler or add new features, follow these steps:

1. Clone the repository.
2. Make changes to the `reconcilerForTodo.ts` file.
3. Compile the TypeScript code to JavaScript:

   ```bash
   tsc reconcilerForTodo.ts
   ```

4. Open `dist/index.html` in your browser to see the updated reconciler in action.
 