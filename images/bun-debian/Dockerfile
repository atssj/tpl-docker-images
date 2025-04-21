# syntax=docker/dockerfile:1.7

FROM oven/bun:1.2.10-debian

# Install git and other dependencies
RUN apt-get update && apt-get install -y \
    git \
    bash \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Add metadata labels
LABEL maintainer="Subhajit Saha" \
      org.opencontainers.image.title="Bun Debian" \
      org.opencontainers.image.description="Bun runtime on Debian with development tools" \
      org.opencontainers.image.version="1.2.4" \
      org.opencontainers.image.source="https://github.com/YOUR_USERNAME/tpl-docker-images" \
      org.opencontainers.image.licenses="MIT" \
      org.opencontainers.image.vendor="Subhajit Saha"
