# Tadashi

![Tadashi](/client/public/images/open-graph.jpg)

## Table of contents

1. [Introduction](#introduction)
2. [Live Website](#LiveWebsite)
3. [How to setup?](#setup)

   1. [Clone the repo to your system.](#step1)
   2. [Install all the packages on client and server folder.](#step2)
   3. [Create environment variables on both folders according to .env.example files.](#step3)
   4. [Start the servers.](#step4)

4. [Screenshots](#Screenshots)
   1. [Home](#Home)
   2. [Tools](#Tools)
   3. [Post Downloader](#Post-Downloader)
   4. [Reels Downloader](#Reels-Downloader)
   5. [Profile](#Profile)
   6. [User Profile](#User-Profile)
   7. [Faqs](#Faqs)
   8. [Contact](#Contact)
5. [Tech Stack](#tech-stack)
6. [Feedback](#feedback)

## Introduction

Tadashi is an online web-app that allows you to download Instagram photos and videos.

## Live Website<a id="LiveWebsite"></a>

https://tadashi.vercel.app/

## How to setup?<a id="setup"></a>

### Clone the repo to your system.<a id="step1"></a>

```bash

git clone https://github.com/theviralboy/tadashi
```

### Install all the packages on client and server folders.<a id="step2"></a>

for client folder

```bash

cd client
npm i # or yarn install
```

for server folder

```bash

cd server
npm i # or yarn install
```

### Create environment variables on both folders according to .env.example.<a id="step3"></a>

1. Create **.env.local** file for client and **.env** for server according to **.env.example**.
2. Go to Instagram.com.
3. Open Developer Tools by pressing **Ctrl + Shift + I** or **F11** key.
4. Follow these steps for get your Instagram cookies.
   ![Steps for get your Instagram cookies](/screenshots/setup/get-cookie.png)
5. Paste the cookie inside **.env** file in **server** folder.

### Start the servers.<a id="step4"></a>

for client folder

```bash
cd client
npm start # or yarn start
```

for server folder

```bash
cd server
npm run dev # or yarn run dev
```

## Screenshots<a id="Screenshots"></a>

### Home<a id="Home"></a>

![Home](/screenshots/home.png)

### Tools<a id="Tools"></a>

![Tools ](/screenshots/tools.png)

### Post Downloader<a id="Post-Downloader"></a>

![Post Downloader ](/screenshots/post-download.png)

### Reel Downloader<a id="Reels-Downloader"></a>

![Reel Downloader](/screenshots/reel-download.png)

### Profile<a id="Profile"></a>

![Profile](/screenshots/profile.png)

### User Profile<a id="User-Profile"></a>

![User Profile](/screenshots/user-profile.png)

### FAQ<a id="Faqs"></a>

![FAQ ](/screenshots/faq.png)

### Contact<a id="Contact"></a>

![Contact ](/screenshots/contact.png)

## Tech Stack<a id="tech-stack"></a>

React JS, Next JS, TailwindCSS, Firebase 9, Node JS, Express,

## Feedback<a id="feedback"></a>

If you have any feedback, please reach out to us at sahilverma.webdev@gmail.com
