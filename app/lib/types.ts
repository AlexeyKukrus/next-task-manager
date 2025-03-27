export type TasksListTypes = {
    data: TaskData,
}
export type TaskData = {
    board_id: string,
    name: string,
    items: Array<Column>
}
export type Column = {
    id: string,
    name: string,
    order: number,
    tasks: Array<Task> 
}
export type Task = {
    id: string,
    title: string,
    priority: 'low' | 'medium' | 'high' | 'critical',
    assignee: Assignee | null,
    dueDate: string
    status: 'todo' | 'in_progress' | 'pause' | 'done' | 'cancel'
}
export type Assignee = {
    id: string,
    name: string,
    avatar: string
}