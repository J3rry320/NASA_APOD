export const API_APOD = (API_KEY: string, date: string, hd: boolean) =>
  `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}&hd=${hd}`;
