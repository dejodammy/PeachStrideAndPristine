# Project Title

A brief description of your project and its purpose.

## Table of Contents

- [Installation](#installation)
- [Cloning the Repository](#cloning-the-repository)
- [Building the Project](#building-the-project)
- [Deploying the Build](#deploying-the-build)
- [Setting Up Nginx](#setting-up-nginx)
- [Contributing](#contributing)
- [License](#license)

## Installation

Follow these steps to install the necessary dependencies on your Ubuntu server.

### 1. Update Package List and Install Node.js

First, update the package list and install Node.js from the Nodesource repository.

```bash
sudo apt-get update -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo apt install npm -y
