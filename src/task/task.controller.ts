import { Body, Controller, Post } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() taskDTO: TaskDTO) {
        return this.taskService.create(taskDTO)
    }
}