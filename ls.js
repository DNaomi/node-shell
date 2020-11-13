const fs = require("fs");

module.exports = () => {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (data) => {
    if (data.toString().trim() === "ls") {
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join("\n"));
          process.stdout.write("\nprompt > ");
        }
      });
    }
    else {
      const cmd = data.toString().trim();

      process.stdout.write("You typed: " + cmd);
      process.stdout.write("\nprompt > ");
    }
  });
};
