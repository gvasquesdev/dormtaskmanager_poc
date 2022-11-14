import { Task, TaskEntity } from './../protocols/taskProtocol.js';
import connection from '../database/db.js';
import { QueryResult } from 'pg';
import dayjs from 'dayjs';

async function getAllTasks(): Promise<QueryResult<TaskEntity>> {
    return connection.query("SELECT * FROM tasks;")

}

async function getTaskById(id): Promise<QueryResult<TaskEntity>> {
    return connection.query(`SELECT * FROM tasks WHERE id=$1;`, [id])

}

async function getTasksByName(name): Promise<QueryResult<TaskEntity>> {
    return connection.query(`SELECT * FROM tasks WHERE "assignedPerson"=$1;`, [name])

}


async function createTasks(task: Task): Promise<QueryResult<TaskEntity>>{
    const creationDate = dayjs(Date.now()).format("DD-MM-YYYY");

    return connection.query(`
        INSERT INTO tasks ("description", "createdAt", "assignedPerson", "completionStatus") VALUES ($1,$2,$3,$4)
    `, [task.description, creationDate, task.assignedPerson, task.completionStatus]);
}

async function updateTaskStatus(id): Promise<QueryResult<TaskEntity>>{

    return connection.query(`
        UPDATE tasks SET "completionStatus" = NOT "completionStatus" WHERE id = $1
    `, [id]);
}

async function deleteTask(id): Promise<QueryResult<TaskEntity>>{

    return connection.query(`
        DELETE FROM tasks WHERE id = $1
    `, [id]);
}


export {
    getTasksByName,
    getAllTasks,
    getTaskById,
    createTasks,
    updateTaskStatus,
    deleteTask
    
}