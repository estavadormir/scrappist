/**
 * Generate urls based on a certain domain concatenated with a string and an optional max number.
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
