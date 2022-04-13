import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName:'posts'})
export class Post extends Model<Post, PostCreationAttrs>{

    @ApiProperty({example: '1', description: 'unique post id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Title', description: 'post title'})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: 'This post is about...', description: 'post content'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: '1179d54f-0fd9-45c0-b095-491d26de5740.jpg', description: 'image name'})
    @Column({type: DataType.STRING})
    image: string;

    @ApiProperty({example: '1', description: 'user id'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User
}