const tokenKey = "token";

export function setToken(token: string) {
  try {
    uni.setStorageSync(tokenKey, token);
  } catch (e) {}
}

export function getToken(): string {
  try {
    return uni.getStorageSync(tokenKey);
  } catch (e) {
    return "";
  }
}

export function removeToken() {
  try {
    uni.removeStorageSync(tokenKey);
  } catch (e) {}
}
