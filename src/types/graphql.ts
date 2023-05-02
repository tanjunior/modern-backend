
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePostInput {
    title: string;
    content: string;
    authorId: string;
}

export class UpdatePostInput {
    id: string;
    title?: Nullable<string>;
    text?: Nullable<string>;
    isPublished?: Nullable<boolean>;
}

export class CreateUserInput {
    name: string;
    email: string;
}

export class UpdateUserInput {
    id: string;
    name?: Nullable<string>;
    posts?: Nullable<PostDetails[]>;
    followId?: Nullable<string>;
}

export class PostDetails {
    id: string;
    title: string;
    authorId: string;
    publised: boolean;
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
    publised: boolean;
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

export abstract class ISubscription {
    abstract postCreated(): Nullable<Post> | Promise<Nullable<Post>>;
}

export class User {
    id: string;
    name: string;
    posts?: Nullable<Post[]>;
    followers?: Nullable<User[]>;
    followings?: Nullable<User[]>;
}

type Nullable<T> = T | null;
