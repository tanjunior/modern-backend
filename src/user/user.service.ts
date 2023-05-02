import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from 'src/types/graphql'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data: createUserInput
    })
  }

  async findAll() {
    return this.prisma.user.findMany()
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {id},
      select: { id: true, name: true }
    })
  }

  async update(id: string, { name, followId }: UpdateUserInput): Promise<User> {
    return this.prisma.user.update({
      where: {id},
      data: {
        following: {
          connect: { id: followId }
        }
      }
    })
  }

  // async update(updateUserInput: UpdateUserInput): Promise<User> {
  //   const { id, ...params_without_id } = updateUserInput;
  //   const { name, posts, followId } = params_without_id
  //   return this.prisma.user.update({
  //     where: {id},
  //     data: {
  //       following: {
  //         connect: { id: followId }
  //       }
  //     }
  //   })
  // }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: {id}
    })
  }
}
