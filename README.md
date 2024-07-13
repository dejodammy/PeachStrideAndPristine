# Project Title

Deploying a web application on an AWS EC2 instance involves multiple steps, ranging from launching the server to configuring Nginx to serve your application. This guide provides a comprehensive walkthrough for deploying a ReactJS application on an AWS EC2 Ubuntu server.

## Table of Contents

- [Installation](#installation)
- [Cloning the Repository](#cloning-the-repository)
- [Building the Project](#building-the-project)
- [Deploying the Build](#deploying-the-build)
- [Setting Up Nginx](#setting-up-nginx)


## Installation

Follow these steps to install the necessary dependencies on your Ubuntu server.

1. Update the package list and install Node.js from the Nodesource repository:

    ```bash
    sudo apt-get update -y
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
    sudo apt install npm -y
    ```

2. Install Nginx, which will be used as the web server to serve your application:

    ```bash
    sudo apt install nginx -y
    ```

3. Install `serve` globally to use as a simple static server for serving your built application:

    ```bash
    sudo npm install -g serve
    ```

## Cloning the Repository

1. Clone your Git repository. Replace `<YOUR-GIT-Repo>` with the URL of your repository:

    ```bash
    git clone <YOUR-GIT-Repo>
    ```

2. Navigate to your project folder. Replace `<project-folder>` with the name of your project directory:

    ```bash
    cd <project-folder>
    ```

## Building the Project

1. Install the necessary project dependencies:

    ```bash
    npm install
    ```

    If you encounter any issues during installation, you can force the installation with:

    ```bash
    npm install --force
    ```

2. Build the project to create a `build` directory containing the production-ready files:

    ```bash
    npm run build
    ```

3. Test how the build using  `serve` :

    ```bash
    serve build 
    ```
    or
    ```bash
    serve dist
    ```
4. Checkout the website on your webrowser with 
    ```bash
     http://ipv4:3000 
    ```

## Deploying the Build

1. Navigate to the parent directory:

    ```bash
    cd ..
    ```

2. Create a directory for deployment to hold the build files:

    ```bash
    sudo mkdir -p /var/www/vhosts/PeachStrideAndPristine/
    ```

3. Copy the contents of the `build` directory to the newly created directory:

    ```bash
    sudo cp -R <project-folder>/build/ /var/www/vhosts/PeachStrideAndPristine/
    ```

## Setting Up Nginx

1. Navigate to the Nginx sites configuration directory:

    ```bash
    cd /etc/nginx/sites-enabled/
    ```

2. Remove the default Nginx configuration to avoid conflicts:

    ```bash
    sudo rm -rf default
    ```

3. Create a new Nginx configuration file. Replace `<nginx-file-name>` with the desired name of your configuration file:

    ```bash
    sudo vim /etc/nginx/sites-available/<nginx-file-name>
    ```

4. Add the following configuration to the file. Adjust the `root` directive to point to your build directory:

    ```nginx
    server {
      listen 80 default_server;
      server_name _;

      location / {
        autoindex on;
        root /var/www/vhosts/PeachStrideAndPristine/build;
        try_files $uri /index.html;
      }
    }
    ```

5. Enable the configuration by creating a symbolic link:

    ```bash
    sudo ln -s /etc/nginx/sites-available/<nginx-file-name> /etc/nginx/sites-enabled/
    ```

6. Restart Nginx to apply the changes:

    ```bash
    sudo systemctl restart nginx
    sudo service nginx restart
    ```

## Credits

This project was made possible thanks to the valuable tutorial provided by [Tech Tutorials](https://www.youtube.com/channel/UC123456789). Special thanks to [CodeWithMuh] for the comprehensive guide on deploying a Next.js application on Ubuntu.

You can find the original tutorial [here](https://www.youtube.com/@codewithmuh).


