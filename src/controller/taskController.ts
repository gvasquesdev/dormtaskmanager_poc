import { Request, Response } from "express";
import { Task } from './../protocols/taskProtocol.js';
import { TaskSchema } from '../schemas/taskSchema.js';
import { getTasksByName, getAllTasks, getTaskById, createTasks, updateTaskStatus, deleteTask} from '../repository/taskRepository.js';


async function getTasks (req: Request, res: Response) {
    const name  = req.query.name;

    if(name){
        const nameResult = await getTasksByName(name);
        return res.send(nameResult.rows);
    }
    
    const result = await getAllTasks();
  
    return res.send(result.rows);
}

async function getTasksById(req: Request, res: Response) {
    const {id} = req.params;

    console.log("2")

    const result = await getTaskById(id);
    return res.send(result.rows[0]);
}


async function insertTask(req: Request,res: Response) {
    const newTask = req.body as Task;

    const {error} = TaskSchema.validate(newTask);

    if(error) {
        return res.status(400).send({
            message: error.message
        })
    }
    const result = await createTasks(newTask);
    return res.send(`Task inserted!`);

}

async function updateTask(req: Request,res: Response) {
    const {id} = req.params;

    
    const result = await updateTaskStatus(id);
    return res.status(200).send("Task Status Updated");
}

async function deleteTasks(req: Request, res: Response) {
    const {id} = req.params;

    
    const result = await deleteTask(id);
    return res.status(200).send("Task Deleted Succesfully");
}


export {
    getTasks,
    getTasksById,
    insertTask,
    updateTask,
    deleteTasks
}