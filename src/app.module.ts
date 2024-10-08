import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bike } from './entities/bike.entity';
import { BikeModule } from './bike/bike.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bike_library.db',
      entities: [Bike],
      synchronize: true,
    }),
    BikeModule,
  ],
})
export class AppModule {}
