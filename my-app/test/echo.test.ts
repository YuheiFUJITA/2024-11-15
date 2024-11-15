import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index';

describe('POST /echo', () => {
  it('should echo back the input', async () => {
    const response = await request(app)
      .post('/echo')
      .send('Hello, world!');
    
    expect(response.text).toBe('Hello, world!');
  });
});
