import {ApiProperty} from "@nestjs/swagger";

export class CreatePostDto {

    @ApiProperty({example: 'My post title', description: 'post title'})
    readonly title: string;

    @ApiProperty({example: 'What is this post about', description: 'post content'})
    readonly content: string;

    @ApiProperty({example: '1', description: 'user id'})
    readonly userId: number;
}