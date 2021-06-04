# Entities

## Task

A `task` is a single "todo".

The fields that will always be defined on a `task` are:
- `id` - The unique identifier for that specific `task`
- `name`- The given name of the `task`
- `completed` - A boolean that represents if the task is completed or not
- `createdAt` - The date the `task` was created at
- `updatedAt` - The date the `task` was last updated

```
model Task {
  id         Int       @id @default(autoincrement())
  name       String
  completed  Boolean   @default(false)
  dueDate    DateTime?
  list       List?     @relation(fields: [listId], references: [id])
  listId     Int?      @unique
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt
}
```