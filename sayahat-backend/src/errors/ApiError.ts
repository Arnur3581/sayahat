import { HTTP_MESSAGES, HTTP_STATUS_CODES } from "#constants/constants";
import { StatusCode } from "#types/main";

type ErrorStatusCode = Exclude<StatusCode, 200 | 201>;

class ApiError extends Error {
	statusCode: ErrorStatusCode;

	constructor(statusCode: ErrorStatusCode, message: string) {
		super(message);
		this.statusCode = statusCode;
	}

	static badRequest() {
		return new ApiError(
			HTTP_STATUS_CODES.BAD_REQUEST,
			HTTP_MESSAGES.BAD_REQUEST
		);
	}

	static unauthorized() {
		return new ApiError(
			HTTP_STATUS_CODES.UNAUTHORIZED,
			HTTP_MESSAGES.UNAUTHORIZED
		);
	}

	static forbidden() {
		return new ApiError(HTTP_STATUS_CODES.FORBIDDEN, HTTP_MESSAGES.FORBIDDEN);
	}
}

export { ApiError };
