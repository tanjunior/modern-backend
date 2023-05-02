
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePostInput {
    title: string;
    authorId: string;
}

export class UpdatePostInput {
    id: string;
    title: string;
}

export class CreateUserInput {
    name: string;
}

export class UpdateUserInput {
    id: string;
    name?: Nullable<string>;
    posts?: Nullable<PostDetails[]>;
    followers?: Nullable<Nullable<FollowersDetails>[]>;
    followings?: Nullable<Nullable<FollowingsDetails>[]>;
}

export class PostDetails {
    id: string;
    title: string;
    authorId: string;
}

export class FollowersDetails {
    id: string;
}

export class FollowingsDetails {
    id: string;
}

export class Post {
    id: string;
    title: string;
    authorId: string;
}

export abstract class IQuery {
    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    name: string;
    posts?: Nullable<Post[]>;
    followers?: Nullable<User[]>;
    followings?: Nullable<User[]>;
}

type Nullable<T> = T | null;
