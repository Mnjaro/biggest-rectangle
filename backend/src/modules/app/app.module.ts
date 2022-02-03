import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { AppController } from '../../controllers/app/app.controller'
import { AppService } from '../../services/app/app.service'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
