import { test, expect } from "bun:test";
import { crawlToPdf } from "./crawlToPdf";

test("crawlToPdf should return a pdf file", async () => {
  const pdf = await crawlToPdf("https://www.google.com/", "test.pdf");
  expect(pdf).toBeDefined();
});

test("crawlToPdf should throw an error if the url is invalid", async () => {
  await expect(crawlToPdf("invalid url", "test.pdf")).rejects.toThrow(
    "Invalid URL"
  );
});

test("crawlToPdf should throw an error if the file path is invalid", async () => {
  await expect(
    crawlToPdf("https://www.google.com/", "invalid path")
  ).rejects.toThrow("Invalid file path");
});
