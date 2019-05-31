import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Logger, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Controller('todos')
export class TodoController {

  private readonly logger = new Logger('Greet');

  constructor(private todoService: TodoService) {}

  @Get()
  public getAll(): Todo[] {
    this.logger.log('All todos requested');
    return this.todoService.getAll();
  }

  @Get(':id')
  public getTodo(@Param('id') id: string): Todo {
    const result = this.todoService.get(+id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public createTodo(@Body('name') name: string, @Body('done') done: boolean): Todo {
    return this.todoService.add(new Todo(name, done));
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public updateTodo(@Param('id') id: string, @Body('name') name: string, @Body('done') done: boolean): void {
    this.todoService.update(+id, new Todo(name, done, +id));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public deleteTodo(@Param('id') id: string): void {
    this.todoService.delete(+id);
  }

}
