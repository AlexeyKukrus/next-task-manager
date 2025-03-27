import { TasksListTypes } from "./types";

export const tasks : TasksListTypes = {
  data: {
    board_id: "12345",
    name: "Project Kanban Board",
    items: [
      {
        id: "col-1",
        name: "todo",
        order: 1,
        tasks: [
          {
            id: "task-1",
            title: "Design Login Page",
            priority: "high",
            assignee: {
              id: "user-1",
              name: "Alice Johnson",
              avatar: "https://example.com/avatar/alice.jpg"
            },
            dueDate: "2025-03-25",
            status: "todo"
          }
        ]
      },
      {
        id: "col-2",
        name: "in_progress",
        order: 2,
        tasks: [
          {
            id: "task-2",
            title: "Fix API Bugs",
            priority: "medium",
            assignee: null,
            dueDate: "2025-03-27",
            status: "in_progress"
          },
        ]
      },
      {
        id: "col-3",
        name: "pause",
        order: 3,
        tasks: [
          {
            id: "task-3",
            title: "Build Kanban Board",
            priority: "critical",
            assignee: {
              id: "user-2",
              name: "John Smith",
              avatar: "https://example.com/avatar/john.jpg"
            },
            dueDate: "2025-03-20",
            status: "pause"
          },
        ]
      },
      {
        id: "col-4",
        name: "done",
        order: 4,
        tasks: [
          {
            id: "task-4",
            title: "Build Kanban Board",
            priority: "low",
            assignee: {
              id: "user-2",
              name: "John Smith",
              avatar: "https://example.com/avatar/john.jpg"
            },
            dueDate: "2025-03-20",
            status: "done"
          },
        ]
      },
      {
        id: "col-5",
        name: "cancel",
        order: 5,
        tasks: [
          {
            id: "task-5",
            title: "Build Kanban Board",
            priority: "medium",
            assignee: {
              id: "user-2",
              name: "John Smith",
              avatar: "https://example.com/avatar/john.jpg"
            },
            dueDate: "2025-03-20",
            status: "cancel"
          },
        ]
      }
    ]
  }
}