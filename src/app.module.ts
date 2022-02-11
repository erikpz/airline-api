import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from 'nest-mongodb';
import { DestinationModule } from './destination/destination.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongoModule.forRoot(process.env.MONGODB_URI, process.env.MONGODB_NAME),
    UserModule,
    DestinationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
