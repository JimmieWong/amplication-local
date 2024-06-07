/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SessionIdWhereInput } from "./SessionIdWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SessionIdOrderByInput } from "./SessionIdOrderByInput";

@ArgsType()
class SessionIdFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SessionIdWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SessionIdWhereInput, { nullable: true })
  @Type(() => SessionIdWhereInput)
  where?: SessionIdWhereInput;

  @ApiProperty({
    required: false,
    type: [SessionIdOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SessionIdOrderByInput], { nullable: true })
  @Type(() => SessionIdOrderByInput)
  orderBy?: Array<SessionIdOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SessionIdFindManyArgs as SessionIdFindManyArgs };
