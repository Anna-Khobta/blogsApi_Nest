/*
import { Injectable } from '@nestjs/common';
import { BlogsRepository } from './blogs.repository';

@Injectable()
export class BlogsService {
  constructor(protected usersRepository: BlogsRepository) {}
  createBlog(name: string, description: string, websiteUrl: string) {
    const newBlog = {
      id: (+new Date()).toString(),
      name: name,
      description: description,
      websiteUrl: websiteUrl,
      createdAt: new Date().toISOString(),
      isMembership: false,
    };
  }
}
*/
