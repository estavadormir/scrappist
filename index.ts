import puppeteer, { PDFOptions } from "puppeteer";
import { GenerateUrls } from "./utils";

/**
 * Crawls a url and saves it as a pdf.
 * @param url string of url to crawl
 * @param outputFile string of output file name
 * @returns Promise of pdf
 */
const crawToPdf = async (url: string, outputFile: string) => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  await page.goto(url);

  const pdfConfig: PDFOptions = {
    path: outputFile,
    format: "A3",
    printBackground: true,
  };
  await page.emulateMediaType("screen");
  const pdf = await page.pdf(pdfConfig);
  await browser.close();

  return pdf;
};

/**
 * Save urls to pdfs.
 * @param urls string[] of urls to save as pdfs
 */
const saveUrlsToPdfs = async (urls: string[]) => {
  let i = 1;
  for (const url of urls) {
    const outputFile = `${i}.pdf`;
    await crawToPdf(url, outputFile);
    i++;
  }
};

// Example usage
const exampleDomain = "https://www.google.com/";
const exampleAppendString = "search?q=hello+world";
saveUrlsToPdfs(GenerateUrls(exampleDomain, exampleAppendString));
