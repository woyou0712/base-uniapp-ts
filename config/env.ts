import type { EnvModeType } from "./types.d";

export default function getEnv(): EnvModeType {
  const env = import.meta.env;
  console.log("env", env);
  return env.MODE as EnvModeType;
}
