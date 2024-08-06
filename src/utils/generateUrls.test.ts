import { test, expect } from "bun:test";
import { generateUrls } from "./generateUrls";

test("generateUrls should return an array of urls", () => {
  const urls = generateUrls("https://www.google.com/", "search?q=hello+world");
  expect(urls).toEqual(["https://www.google.com/search?q=hello+world"]);
});

test("generateUrls should return an array of urls with page count", () => {
  const urls = generateUrls(
    "https://www.google.com/",
    "search?q=hello+world",
    3
  );
  expect(urls).toEqual([
    "https://www.google.com/search?q=hello+world/1",
    "https://www.google.com/search?q=hello+world/2",
    "https://www.google.com/search?q=hello+world/3",
  ]);
});
