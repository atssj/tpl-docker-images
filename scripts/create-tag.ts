#!/usr/bin/env bun

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

interface PackageJson {
  name: string;
  version: string;
  [key: string]: any;
}

// Get package info
const packagePath: string = path.resolve('./images/bun-debian/package.json');
const packageJson: PackageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const { name, version } = packageJson;

// Create tag name
const tagName: string = `${name}@${version}`;

console.log(`Creating tag: ${tagName}`);

try {
  // Create and push tag
  execSync(`git tag -a "${tagName}" -m "Release ${name} v${version}"`);
  execSync(`git push origin "${tagName}"`);
  console.log(`✅ Successfully created and pushed tag: ${tagName}`);
} catch (error) {
  console.error(`❌ Failed to create tag: ${(error as Error).message}`);
  process.exit(1);
}
