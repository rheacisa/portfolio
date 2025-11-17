// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  // Always return the one API token from Vercel
  
  return process.env.REACT_APP_DATOCMS_API_TOKEN ?? '';
};