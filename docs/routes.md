# Routes

## Task

- `GET` `/tasks` - Returns an array of all tasks

- `GET` `/tasks/:id` - Returns a single task matching `:id`

- `POST` `/tasks` - Adds a new task based on the payload
  - The basic payload for a new task is:
  ```
    {
      "name": "Name goes here"
    }
  ```

- `PATCH` `/tasks/:id` - Updates an existing task based on the payload
  - The basic payload to update a task is:
  ```
    {
      "name": "New name goes here"
    }
  ```
  - To mark a task as completed you would use this payload:
  ```
    {
      "completed": true
    }
  ```

- `DELETE` `/tasks/:id` - Deletes an existing task matching `:id`