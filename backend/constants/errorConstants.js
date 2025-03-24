export const ERROR_CODES = {
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
    AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
    NOT_FOUND: 'NOT_FOUND',
    SERVER_ERROR: 'SERVER_ERROR',
    BAD_REQUEST: 'BAD_REQUEST',  // New: For invalid user input
    FORBIDDEN: 'FORBIDDEN',      // New: When a user lacks permissions
    CONFLICT: 'CONFLICT'         // New: When duplicate data exists (e.g., duplicate email)
};

export const ERROR_MESSAGES = {
    INVALID_CREDENTIALS: 'Invalid email or password',
    USER_NOT_FOUND: 'User not found',
    PRODUCT_NOT_FOUND: 'Product not found',
    ORDER_NOT_FOUND: 'Order not found',
    UNAUTHORIZED: 'Unauthorized access',
    INVALID_TOKEN: 'Invalid or expired token',
    MISSING_FIELDS: 'Required fields are missing',  // New: For validation errors
    ACCESS_DENIED: 'Access denied',                 // New: Generic permission error
    DUPLICATE_ENTRY: 'Duplicate entry found'        // New: For conflicts like duplicate email
};
