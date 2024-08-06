import { crawlToPdf } from "@/utils";

export const generatePDFfromURL = async (urls: string[]) => {
  let i = 1;
  for (const url of urls) {
    const outputFile = `${i}.pdf`;
    await crawlToPdf(url, outputFile);
    i++;
  }
};
