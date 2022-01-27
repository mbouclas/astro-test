interface ImportMetaEnv {
    readonly API_URL: string;
    readonly STRAPI_KEY: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }