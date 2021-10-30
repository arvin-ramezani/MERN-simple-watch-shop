import { createClient } from "redis";

// redisClient = createClient("192.168.43.43:6379")

const redisClient = createClient(
  Number(process.env.REDIS_PORT),
  process.env.REDIS_HOST
);

// connect to redis
// const redisClient = createClient({
//   port: process.env.REDIS_PORT,
//   host: process.env.REDIS_HOST,
// });

redisClient.on("connect", () => {
  console.log("redis client connected");
});

export default redisClient;
