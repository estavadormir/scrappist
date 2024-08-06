import puppeteer, { PDFOptions } from "puppeteer";
import { Presets, SingleBar } from "cli-progress";

export const crawlToPdf = async (url: string, outputFile: string) => {
  if (!url.startsWith("http")) {
    throw new Error("Invalid URL");
  }
  if (!outputFile.endsWith(".pdf")) {
    throw new Error("Invalid file path");
  }
  const bar = new SingleBar({}, Presets.shades_grey);
  bar.start(100, 0);
  const browser = await puppeteer.launch({
    headless: "shell",
  });
  bar.update(10);
  const page = await browser.newPage();
  bar.update(20);
  await page.goto(url);
  bar.update(30);
  const pdfConfig: PDFOptions = {
    path: "./pdf/" + outputFile,
    format: "A3",
    printBackground: true,
  };

  await page.emulateMediaType("screen");
  bar.update(40);
  const pdf = await page.pdf(pdfConfig);
  bar.update(50);
  await browser.close();
  bar.update(100);
  bar.stop();

  return pdf;
};
