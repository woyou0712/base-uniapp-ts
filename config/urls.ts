import type { UrlType, UrlsType } from "./types";

/** 服务 */
export const service: UrlType = {
  hrm: "/iamHrmApi",
};

/** URL地址 */
export const urls: UrlsType = {
  // 本地环境
  development: {
    hrm: "https://hrm2-dev.bnq.com.cn",
  },
  // dev
  dev: {
    hrm: "https://hrm2-dev.bnq.com.cn",
  },
  // test
  test: {
    hrm: "https://hrm2-test.bnq.com.cn",
  },
  // uat
  uat: {
    hrm: "https://hrm2-uat.bnq.com.cn",
  },
  // 生产
  prod: {
    hrm: "https://hrm2.bnq.com.cn",
  },
};
