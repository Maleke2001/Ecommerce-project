export const registerSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .regex(/^[a-zA-Z\s]+$/) // Ensures only letters and spaces
        .required()
        .messages({
            'string.empty': 'Name is required',
            'string.min': 'Name must be at least 2 characters',
            'string.max': 'Name must not exceed 50 characters',
            'string.pattern.base': 'Name can only contain letters and spaces'
        }),

    email: Joi.string()
        .trim()
        .email()
        .required()
        .messages({
            'string.empty': 'Email is required',
            'string.email': 'Invalid email format'
        }),

    password: Joi.string()
        .min(6)
        .max(30)
        .required()
        .pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$'))
        .messages({
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 6 characters',
            'string.max': 'Password must not exceed 30 characters',
            'string.pattern.base': 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character'
        })
});
