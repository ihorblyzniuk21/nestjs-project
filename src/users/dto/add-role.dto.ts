import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {

    @ApiProperty({example: 'USER', description: 'role value'})
    @IsString({message: "should be string"})
    readonly value: string;

    @ApiProperty({example: '1', description: 'user id'})
    @IsNumber({}, {message: "should be number"})
    readonly userId: number;
}