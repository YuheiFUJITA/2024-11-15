# 2024-11-15

## Echo Endpoint

This project includes an echo endpoint that returns the input it receives.

### How to Use

1. Start the server:
   ```sh
   npm start
   ```

2. Send a request to the echo endpoint:
   ```sh
   curl -X POST http://localhost:3000/echo -d "your message here"
   ```

3. You should receive a response with the same message you sent.

## Running Tests

This project uses Vitest for testing. To run the tests, use the following command:

```sh
npm test
```
