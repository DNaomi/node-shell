const fs = require("fs");

module.exports = () => {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (data) => {
    if (data.toString().trim().includes("cat ")) {
      let filename = data.toString().trim().slice(4);

      fs.readFile(filename, (err, data) => {
        if (err) throw err;
        else {
          process.stdout.write(data);
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};
