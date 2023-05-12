import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersRepository } from './users/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './cats/cats-schema';
import { CatsRepository } from './cats/cats.repository';
export const mongoUri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
console.log(mongoUri);
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017', {
      dbName: 'nest-test',
    }),
    MongooseModule.forFeature([
      {
        name: Cat.name,
        schema: CatSchema,
      },
    ]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, CatsRepository, UsersService, UsersRepository],
})
export class AppModule {}
