/**
 * Generate urls based on a certain domain concatenated with a string and an optional max number.
 * TODO: currently only allows a certain format of url, perhaps adapt this to allow for more flexibility.
 */
export const GenerateUrls = (
  domain: string,
  appendString: string,
  max?: number
): string[] => {
  const urls: string[] = [];
  if (max) {
    for (let i = 0; i < max; i++) {
      urls.push(`${domain}${appendString}${i}`);
    }
  } else {
    urls.push(`${domain}${appendString}`);
  }
  return urls;
};
