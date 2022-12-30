import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Post } from "src/posts/entities/post.entity";
import { User } from "src/users/entities/user.entity";

export default (): TypeOrmModuleOptions => ({
    type: "sqlite",
    database: "./src/db/data/app.sqlite",
    entities:[User, Post],
    // migrations: ["./src/db/migrations/*"],
    logging: true,
    synchronize: true //-> Synchronize tables with code
})

// We do not need migrations when synchronize = true
