import { getToken } from "./Token";
import { getBaseUrl } from "../../config/index";
import type { UrlKeyType } from "../../config/types.d";

type DataType = "json" | "formData";
interface ReqOption {
  url: string;
  method?:
    | "GET"
    | "OPTIONS"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "TRACE"
    | "CONNECT";
  urlType?: UrlKeyType;
  dataType?: DataType;
  data?: AnyObject | string | ArrayBuffer;
}

interface uploadOption extends ReqOption {
  file?: File;
  files?: File[];
  filePath?: string;
  name?: string;
  formData?: AnyObject;
}

interface ResData<T> {
  code: number;
  message: string;
  data: T;
  success: boolean;
  timestamp: number;
}

function getHeader(dataType?: DataType) {
  const header: { [key: string]: string } = {};
  if (dataType) {
    header["content-type"] =
      dataType === "json"
        ? "application/json"
        : "application/x-www-form-urlencoded";
  }
  const token = getToken();
  if (token) {
    header.token = token;
  }
  return header;
}

export function request<T = any>(option: ReqOption): Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      uni.request({
        url: `${getBaseUrl(option.urlType)}${option.url}`,
        method: option.method || "GET",
        data: option.data,
        dataType: option.dataType || "json",
        header: getHeader(option.dataType || "json"),
        success(res) {
          const data = res.data as ResData<T>;
          if (data.code === 0) {
            resolve(data.data);
          } else {
            uni.showToast({
              title: data.message,
              icon: "none",
            });
          }
        },
        fail(e) {
          console.log(e);
          reject(e);
        },
      });
    } catch (e) {
      console.log("执行出错", e);
      reject("执行出错");
    }
  });
}

export function uploadFile<T = any>(option: uploadOption): Promise<T> {
  return new Promise((resolve, reject) => {
    try {
      uni.uploadFile({
        url: `${getBaseUrl(option.urlType)}${option.url}`,
        formData: option.formData,
        file: option.file,
        files: option.files,
        name: option.name,
        header: getHeader(),
        success(res) {
          const data = (res as any).data as ResData<T>;
          if (data.code === 0) {
            resolve(data.data);
          } else {
            uni.showToast({
              title: data.message,
              icon: "none",
            });
          }
        },
        fail(e) {
          reject(e);
        },
      });
    } catch (e) {
      console.log("执行出错", e);
      reject("执行出错");
    }
  });
}
