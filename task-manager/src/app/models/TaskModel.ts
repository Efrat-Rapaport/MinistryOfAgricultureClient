export class TaskModel {
    id!: number; // חובה
    name!: string; // שם המשימה - חובה
    startDate!: string; // מועד התחלה - חייב להיות string
    completed?: boolean | null; // האם הסתיימה - יכול להיות boolean או null
    endDate?: string | null; // מועד סיום - יכול להיות string או null
    taskType?: string | null; // סוג משימה - יכול להיות string או null
    isRecurring!: boolean; // האם המשימה חד-פעמית או מחזורית
    description?: string | null; // תיאור המשימה - יכול להיות string או null
    archived!: boolean; // האם המשימה בארכיון

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.startDate = data.startDate; // שים לב שצריך להיות string
        this.completed = data.completed !== undefined ? data.completed : null; // אם לא קיים, להחזיר null
        this.endDate = data.endDate !== undefined ? data.endDate : null; // אם לא קיים, להחזיר null
        this.taskType = data.taskType !== undefined ? data.taskType : null; // אם לא קיים, להחזיר null
        this.isRecurring = data.isRecurring !== undefined ? data.isRecurring : false; // ברירת מחדל false
        this.description = data.description !== undefined ? data.description : null; // אם לא קיים, להחזיר null
        this.archived = data.archived !== undefined ? data.archived : false; // ברירת מחדל false
    }
}
