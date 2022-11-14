import joi from "joi";

export const TaskSchema = joi.object({
    description: joi.string().required(),
    createdAt: joi.date() || joi.string(),
    assignedPerson: joi.string().required(),
    completeStatus: joi.boolean().default(false),
});
