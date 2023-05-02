import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserInput, UpdateUserInput } from 'src/types/graphql'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create({ name }: CreateUserInput) {
    return this.prisma.user.create({
      data: {
        name
      }
    })
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {id},
      select: { id: true, name: true }
    })
  }

  update(id: string, { name }: UpdateUserInput) {
    return this.prisma.user.update({
      where: {id},
      data: {
        name,
      }
    })
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {id}
    })
  }
}
