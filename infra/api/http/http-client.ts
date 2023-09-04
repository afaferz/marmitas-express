import { Http, HttpPure } from "./http.infra";
import { HttpClient } from "./http.interface";

export const makeHttp = new Http(new HttpPure());
export type { HttpClient, Http };
