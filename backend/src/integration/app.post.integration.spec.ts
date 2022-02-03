import { INestApplication, ValidationPipe } from '@nestjs/common'
import { TestingModule, Test } from '@nestjs/testing';
import * as request from 'supertest'

import { AppModule } from '../modules/app/app.module'


describe('Integration test for App / routes', () => {
    let app: INestApplication
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                AppModule,
            ],
        }).compile();

        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ transform: true, disableErrorMessages: true }))
        await app.init();
    });

    describe('POST /', () => {
        it('successfully sends out data', async () => {
            const response = await request(app.getHttpServer())
                .post('/')
                .send({
                    game: [
                        [0, 1, 1, 0],
                        [1, 1, 1, 1],
                        [1, 1, 1, 1],
                        [1, 1, 0, 0],
                        [1, 1, 1, 0],
                        [1, 1, 1, 0],
                        [1, 1, 1, 0],
                        [1, 1, 1, 1]
                    ]
                })
                .expect(201);

            const gameRes = response.body;
            expect(gameRes).toMatchObject({ area: 14, top: 1, bottom: 7, left: 0, right: 1 });
        });
        it('should send out a bad request error if the game is invalid', async () => {
            await request(app.getHttpServer())
                .post('/')
                .send({ foo: "toto" })
                .expect(400);
        })
    });
})