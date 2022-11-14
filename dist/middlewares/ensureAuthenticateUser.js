// VALIDA TOKEN
import { verify } from "jsonwebtoken";
export async function ensureAuthenticateClient(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({
            message: 'Token missing'
        });
    }
    const [, token] = authHeader.split(" ");
    try {
        verify(token, 'd9452db98c065e8964ebd1c489ad3be1');
        return next();
    }
    catch (err) {
        return response.status(401).json({
            message: 'Invalid token'
        });
    }
}
//# sourceMappingURL=ensureAuthenticateUser.js.map