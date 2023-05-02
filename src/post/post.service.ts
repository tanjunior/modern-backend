import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput, UpdatePostInput } from 'src/types/graphql';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  
  create({title, authorId}: CreatePostInput) {
    const date = new Date();
    return this.prisma.post.create({
      data: {
        title,
        authorId
      }
    })
  }

  findAll() {
    return this.prisma.post.findMany()
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({
      where: {id},
      select: { id: true, title: true, author: true }
    })
  }

  update(id: string, {title }: UpdatePostInput) {
    return this.prisma.post.update({
      where: {id},
      data: {
        title,
      }
    })
  }

  remove(id: string) {
    return this.prisma.post.delete({
      where: {id}
    })
  }
}
