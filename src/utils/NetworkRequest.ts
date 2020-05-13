export const getRequest = async (url: string) =>
  await fetch(url).then((response) => response.json());
