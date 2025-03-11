import { StatusCode } from "#types/main";

type ErrorStatusCode = Exclude<StatusCode, 200 | 201>;

class ApiError extends Error {
	statusCode: ErrorStatusCode;

	constructor(statusCode: ErrorStatusCode, message: string) {
		super(message);
		this.statusCode = statusCode;
	}
}

export { ApiError };
