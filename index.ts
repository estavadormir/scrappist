import { generatePDFfromURL } from "@/generatePDFfromURL";
import { input } from "@inquirer/prompts";

const main = async () => {
  const urls: string[] = await input({
    message: "Enter an URL or multiple URLs separated by a comma:",
    validate: (input) => {
      if (input.length === 0) {
        return "Please enter URLs";
      }
      return true;
    },
  }).then((answers) => answers.split(","));
  await generatePDFfromURL(urls);
  console.log("✅ Done. You can find it in the pdf folder.");
};

main();
