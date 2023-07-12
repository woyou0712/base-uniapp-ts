import { urls, service } from "./urls";
import getEnv from "./env";
import type { UrlKeyType } from "./types";

export function getBaseUrl(type: UrlKeyType = "hrm") {
  return `${urls[getEnv()][type]}${service[type]}`;
}
