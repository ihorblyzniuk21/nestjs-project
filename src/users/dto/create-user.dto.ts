import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com', description: 'email address'})
    @IsString({message: "email should be string"})
    @IsEmail({},{message: "invalid email"})
    readonly email: string;

    @ApiProperty({example: '123qwerty', description: 'password'})
    @IsString({message: "email should be string"})
    @Length(4, 16, {message: 'min 4, max 16 symbols'})
    readonly password: string;
}