import { request } from "@/utils/request";

export function requestTest(data?: any) {
  return request<{ code: string; name: string }[]>({
    url: "/departments/getDeptTypes",
    data,
  });
}
