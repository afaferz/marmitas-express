/* eslint-disable @typescript-eslint/no-explicit-any */

import { TypescriptUtils } from "@/utils";

type HttpMethod = "post" | "get" | "put" | "delete";

type HttpRequest = {
  url: string;
  method: TypescriptUtils.InsensitiveCase<HttpMethod>;
  body?: any;
  headers?: any;
};

enum HttpStatusCode {
  local = 0,
  ok = 200,
  create = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  precondition = 412,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};

interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}

export type{ HttpMethod, HttpRequest, HttpStatusCode, HttpResponse, HttpClient };
