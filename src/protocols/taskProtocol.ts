export type TaskEntity = {
    id?:  number,
    description: string,
    createdAt: string | Date,
    assignedPerson: string,
    completionStatus: boolean
}

export type Task = Omit<TaskEntity, "id">