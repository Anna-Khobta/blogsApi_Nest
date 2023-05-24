/*
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(protected blogsService: BlogsService) {}

  @Post()
  createBlog(@Body() inputModel: CreateBlogInputModelType) {
    return {
      id: 12,
      name: inputModel.name,
      childrenCount: inputModel.childrenCount,
    };
  }

  @Get()
  getUsers(@Query('term') term: string) {
    return this.usersService.findUsers(term);
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return [{ id: 1 }, { id: 2 }].find((u) => u.id === +userId);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return;
  }

  @Put(':id')
  updateUser(
    @Param('id') userId: string,
    @Body() model: CreateBlogInputModelType,
  ) {
    return {
      id: userId,
      model: model,
    };
  }
}

type CreateBlogInputModelType = {
  name: string;
  description: string;
  websiteUrl: string;
};
*/
