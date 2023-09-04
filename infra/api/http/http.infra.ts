import { HttpRequest, HttpClient, HttpResponse } from "./http.interface";

// @Sealed
export class HttpPure implements HttpClient {
  public async request(data: HttpRequest): Promise<HttpResponse> {
    let httpResponse: Response;
    let body: unknown;
    const response = await _instance(data);
    try {
      httpResponse = response;
      body = await response.json();
    } catch (error) {
      httpResponse = response;
    }
    return {
      statusCode: httpResponse.status,
      body,
    };
  }
}

// @Sealed
export class Http implements HttpClient {
  constructor(private readonly httpClient: HttpPure) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.httpClient.request(data);
    return httpResponse;
  }
}

async function _instance(
  data: HttpRequest,
  fetchInstance = fetch
): Promise<Response> {
  const { headers, body, method } = data;
  const instance = await fetchInstance(data.url, {
    method,
    headers,
    body: body && JSON.stringify(body),
  });
  return instance;
}
