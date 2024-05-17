const { readFile, writeFile } = require("fs");

// Read the first file
readFile("./content/first.txt", "utf8", (err, firstResult) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = firstResult;

  // Read the second file
  readFile("./content/second.txt", "utf8", (err, secondResult) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = secondResult;

    // Write to the result file
    writeFile(
      "./content/result.txt",
      `Here are the results: ${first}${second}`,
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File written successfully!");
      }
    );
  });
});
