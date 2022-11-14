# dormtaskmanager_poc
Proof of Concepts learned during a TypeScript Mini Course in form of a BackEnd application for Dorm residents to share a task board

Routes and their respective usage

POST: /tasks

Body in the requisition: {
  "description": "What is being done in the task",
  "assignedPerson": "Which member will do the task"
}


Output: "Task inserted!"


GET: /tasks
Output: Without name as a query string, it returns an array of objects containing all tasks registered. If the requisition comes 
with name as an query string, it returns all the tasks assigned to the provided name. For example:

[
  {
    "id": 3,
    "description": "Wash the dishes",
    "createdAt": "2022-11-14T03:00:00.000Z",
    "assignedPerson": "Anderson",
    "completionStatus": false
  },
  {
    "id": 4,
    "description": "Fix the windows",
    "createdAt": "2022-11-14T03:00:00.000Z",
    "assignedPerson": "Olaf",
    "completionStatus": false
  }

GET: /tasks/:id
Output: The task as an object corresponding to the id given by the url.

PUT: /tasks/:id
Output: Updates the task completionStatus to the values true or false.

DELETE: /tasks/:id 
Output: Deletes the task according to the id specified in the url.
