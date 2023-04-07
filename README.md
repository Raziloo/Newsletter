# Newsletter Signup

This is a simple newsletter signup page built using Node.js, Express, and the Mailchimp API.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Newsletter Signup is a simple web application that allows users to subscribe to a mailing list using their name and email address. The application is built using Node.js, Express, and the Mailchimp API.


## Installation

To run the application locally, you need to clone the repository and install the dependencies:

```sh
$ git clone https://github.com/Raziloo/Newsletter.git
$ cd Newsletter
$ npm install
```

You also need to create a Mailchimp account and obtain an API key and list ID. Then, create a .env file in the root directory of the project and add the following variables:
```sh
MAILCHIMP_API_KEY=<your-api-key>
MAILCHIMP_LIST_ID=<your-list-id>
```

Replace <your-api-key> and <your-list-id> with your own API key and list ID.

## Usage

To use this application, follow the installation instructions provided in the previous section. Once the application is running, navigate to `http://localhost:3000` in your web browser.

You will see a simple form that allows you to enter your name and email address. Enter the required information and click the "Subscribe" button. If the subscription is successful, you will be redirected to a "Success" page. Otherwise, you will be redirected to an "Error" page.

## Contributing

Contributions to this project are welcome. If you want to contribute, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


