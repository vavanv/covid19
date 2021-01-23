export const getUrlWithSlash = (url: string): string => {
  return url.endsWith('/') ? url : `${url}/`;
};

export const getPathWithoutSlash = (path: string): string => {
  return path.startsWith('/') ? path.substr(1) : path;
};
