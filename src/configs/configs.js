module.exports = {
    corsOptions: {
        origin: [
        "http://localhost:80", 
        "https://le-feat-deploy--genuine-lily-8b0293.netlify.app"
],
        
    },
    PORT: process.env.PORT || 3000,
    TIMEOUT: 10000,
    RATE_LIMITER: {
        WINDOW_MS: 1 * 60 * 1000, // 15 minutes
        MAX: 100000, // limit each IP to 100 requests per windowMs
    }
}