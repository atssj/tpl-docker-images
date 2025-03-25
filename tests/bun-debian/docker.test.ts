import { expect, test, describe } from 'bun:test';

// Check Git version
async function getGitVersion() {
  try {
    const gitVersion = await Bun.spawn(['git', '--version']);
    const output = await new Response(gitVersion.stdout).text();
    return output.trim();
  } catch (error) {
    return `Error getting Git version: ${(error as Error).message}`;
  }
}

// Execute a bash command
async function executeBashCommand(command: string) {
  try {
    const proc = await Bun.spawn(['bash', '-c', command]);
    const output = await new Response(proc.stdout).text();
    return output.trim();
  } catch (error) {
    return `Error executing command: ${(error as Error).message}`;
  }
}

describe('bun-debian local image', () => {
  test('should have correct Bun version', () => {
    const version = Bun.version;
    expect(version).toBe('1.2.5');
  });

  test('should have Git installed', async () => {
    const gitVersion = await getGitVersion();
    expect(gitVersion).toMatch(/^git version \d+\.\d+\.\d+/);
  });

  test('should execute Bash commands', async () => {
    const output = await executeBashCommand('echo "test successful"');
    expect(output).toBe('test successful');
  });
});
