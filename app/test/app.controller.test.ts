import { Test, TestingModule } from '@nestjs/testing'
import { UpdateGameDTO } from '../src/dtos/game.dto'
import { AppController } from '../src/app.controller'
import { AppService } from '../src/app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return a 2d matrix game of the same size as the parameter', () => {
      let game = new UpdateGameDTO()
      game.game = [
        [0, 1, 1, 0],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 0, 0],
        [1, 1, 1, 0],
        [1, 1, 1, 0],
        [1, 1, 1, 0],
        [1, 1, 1, 1]
      ]

      expect(appController.updateGame(game)).toBe(game.game)
    })
  })
})
