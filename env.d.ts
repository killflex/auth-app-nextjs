declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_MONGODB_URL: string;
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
    }
  }
}

export {};
