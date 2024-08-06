/**
 * @description A custom url generator that takes a
 * domain and query string and an optional page count.
 * If page count is not provided, it will generate a single url.
 *
 * @example
 * const urls = generateUrls("https://www.google.com/", "search?q=hello+world",3);
 * ["https://www.google.com/search?q=hello+world/1", "https://www.google.com/search?q=hello+world/2", "https://www.google.com/search?q=hello+world/3"]
 * @example
 * const urls = generateUrls("https://www.google.com/", "search?q=hello+world");
 * ["https://www.google.com/search?q=hello+world"]
 */
export const generateUrls = (
  domain: string,
  queryString: string,
  pageCount?: number
): string[] => {
  const urls: string[] = [];
  if (pageCount) {
    for (let i = 1; i <= pageCount; i++) {
      urls.push(`${domain}${queryString}/${i}`);
    }
  } else {
    urls.push(`${domain}${queryString}`);
  }
  return urls;
};
