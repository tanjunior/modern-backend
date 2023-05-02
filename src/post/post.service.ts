import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post } from '@prisma/client';
import { CreatePostInput, UpdatePostInput } from 'src/types/graphql';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create({title, content, authorId}: CreatePostInput) {
    const date = new Date();
    return this.prisma.post.create({
      data: {
        title,
        content,
        authorId
      }
    })
  }

  async findAll() {
    return this.prisma.post.findMany()
  }

  async findOne(id: string) {
    return this.prisma.post.findUnique({
      where: {id},
      select: { id: true, title: true, author: true }
    })
  }

  async update(updatePostInput: UpdatePostInput): Promise<Post> {
    const { id, ...params_without_id } = updatePostInput;
    return this.prisma.post.update({
      where: {id},
      data: {
        ...params_without_id,
      }
    })
  }

  async remove(id: string) {
    return this.prisma.post.delete({
      where: {id}
    })
  }
}
