console.log("Hello from Bun running in Docker!");

// Show Bun version
console.log(`Bun version: ${Bun.version}`);

// Show environment
console.log("Environment:", process.env.NODE_ENV || "development");

// Check Git version
async function getGitVersion() {
  try {
    const gitVersion = await Bun.spawn(["git", "--version"]);
    const output = await new Response(gitVersion.stdout).text();
    return output.trim();
  } catch (error) {
    return `Error getting Git version: ${(error as Error).message}`;
  }
}

// Execute a bash command
async function executeBashCommand(command: string) {
  try {
    const proc = await Bun.spawn(["bash", "-c", command]);
    const output = await new Response(proc.stdout).text();
    return output.trim();
  } catch (error) {
    return `Error executing command: ${(error as Error).message}`;
  }
}

// Run the checks
console.log("\nChecking system tools:");
getGitVersion().then(version => console.log("Git version:", version));
executeBashCommand("echo 'Bash command execution works!'")
  .then(output => console.log("Bash test:", output));