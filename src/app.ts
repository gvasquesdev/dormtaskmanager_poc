import express from "express";
import { getTasksById, getTasks, insertTask, updateTask, deleteTasks } from "./controller/taskController.js";

const server = express();
server.use(express.json());

server.post('/tasks', insertTask);
server.get('/tasks', getTasks); //general get
server.get('/tasks/:id', getTasksById);
server.put('/tasks/:id', updateTask)
server.delete('/tasks/:id', deleteTasks)


const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Epic stuff happens on port: ${port}`);
});