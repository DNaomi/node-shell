module.exports = () => {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (data) => {
    if (data.toString().trim() === "pwd") {
      process.stdout.write(__dirname); // or process.cwd()
      process.stdout.write("\nprompt > ");
    } else {
      const cmd = data.toString().trim();

      process.stdout.write("You typed: " + cmd);
      process.stdout.write("\nprompt > ");
    }
  });
};
