import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import {  CreatePostInput, UpdatePostInput } from 'src/types/graphql';
import { Post } from './entities/post.entity';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation('createPost')
  create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(createPostInput);
  }

  @Query('post')
  findAll() {
    return this.postService.findAll();
  }

  @Query('post')
  findOne(@Args('id') id: string) {
    return this.postService.findOne(id);
  }

  @Mutation('updatePost')
  update(@Args('updatePostInput') updatePostInput: UpdatePostInput): Promise<Post> {
    return this.postService.update(updatePostInput);
  }

  @Mutation('removePost')
  remove(@Args('id') id: string) {
    return this.postService.remove(id);
  }
}
