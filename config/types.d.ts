export type UrlType = {
  hrm: string;
};

export type UrlsType = {
  development: UrlType;
  dev: UrlType;
  test: UrlType;
  uat: UrlType;
  prod: UrlType;
};

export type EnvModeType = keyof UrlsType;
export type UrlKeyType = keyof UrlType;
