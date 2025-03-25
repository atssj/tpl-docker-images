# @tpl-docker-images/bun-debian

## 1.2.5

### Major Changes

- 🚀 **WHAT:** Initial release of Bun 1.2.5 Docker image based on Debian

  💡 **WHY THIS CHANGE WAS MADE:**

  - Provide a stable Bun 1.2.5 runtime environment
  - Include essential development tools out of the box
  - Leverage Debian's robust package ecosystem and security updates

  ✨ **KEY FEATURES:**

  - 🏃 Bun v1.2.5 JavaScript runtime
  - 🐋 Based on official Debian base image
  - 🛠️ Pre-installed development tools:
    - 📦 Git for version control
    - 🐚 Bash shell for scripting
    - 🌐 cURL for HTTP requests
    - 🔐 CA certificates for secure connections

  📝 **HOW TO USE:**

  1. Pull and use the image:

  ```dockerfile
  FROM ghcr.io/atssj/bun:1.2.5-debian
  ```
