import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class CreatePostArgs{

    @Field(type => Int, {nullable: false})
    userId: number

    @Field({nullable: false})
    message: string
}

// Another approach using args type
