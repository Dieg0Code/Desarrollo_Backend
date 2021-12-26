module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'QJk6s60Ido',
        password: process.env.MYSQL_PASS || 'c5U6BKZxnK',
        database: process.env.MYSQL_DB || 'QJk6s60Ido',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST ||'redis-18051.c54.ap-northeast-1-2.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 18051,
        password: process.env.REDIS_PASS || 'uSU9POMUdepU9d1mmDHc6hxK52ihBOHN',
    }
}