import { Hono } from 'hono';

const app = new Hono();

app.post('/echo', async (c) => {
  const body = await c.req.text();
  return c.text(body);
});

export default app;
