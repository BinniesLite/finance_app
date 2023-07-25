module.exports = {
    corsOptions: {
        origin: "http://localhost:80"
    },
    PORT: 3000 || process.env.PORT,
    TIMEOUT: 10000,
    RATE_LIMITER: {
        WINDOW_MS: 1 * 60 * 1000, // 15 minutes
        MAX: 100000, // limit each IP to 100 requests per windowMs
    }
}