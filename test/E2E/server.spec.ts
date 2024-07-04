import supertest from 'supertest';
import { APP } from '../../src/app';
import { HELLO_WORLD } from '../data/server.data';

describe('[E2E] | SERVER - [EXPRESS]', () => {
  it('[E2E] | HEALTH CHECK => [HTTP]', async () => {
    const response = await supertest(APP).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(HELLO_WORLD);
  });
});
