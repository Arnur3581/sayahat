export const HTTP_STATUS_CODES = {
	SUCCESS: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	TOO_MANY_REQUESTS: 429,
	SERVER_ERROR: 500,
	SERVICE_UNAVAILABLE: 503,
} as const;

export const HTTP_MESSAGES = {
	SUCCESS: "Success.",
	CREATED: "Resource successfully created.",
	BAD_REQUEST: "Bad request. Please check your input.",
	UNAUTHORIZED: "Unauthorized. Please log in to continue.",
	FORBIDDEN: "Forbidden. You don't have permission to access this resource.",
	NOT_FOUND: "Not found. The requested resource could not be found.",
	TOO_MANY_REQUESTS: "Too many requests. Please slow down and try again later.",
	SERVER_ERROR: "Internal server error. Something went wrong.",
	SERVICE_UNAVAILABLE: "Service unavailable. Please try again later.",
} as const;
