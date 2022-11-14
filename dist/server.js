import express from 'express';
import cors from 'cors';
import "express-async-errors";
import { routes } from './routes';
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({ message: err.message });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
app.listen(3334, () => console.log('My server is running'));
//# sourceMappingURL=server.js.map