# FruitCast

## What is `FruitCast`
The FruitCast project aims to provide a simple app that allows to use a Raspberry Pi (therefore *Fruit*Cast) connected to a TV as a device you can cast things to (videos, music, etc.).

## Features
* You can play a youtube video without being able to control it. That's it.

## Planned features
* Support multiple video providers (`quvi`? `youtube-dl`?)
* Support streaming your own media
* Browser plugins, an android app

## Why?
I don't have a Chromecast. I have a Pi and a 24 inch monitor that I don't use much.

## How does it work?
**Short answer:** it does not because I just started working on it.

**Long answer:**   
You run a server on a Pi and point Chromium in kiosk mode to it. (I plan on making a package that makes Pi boot to Chromium, so you can just plug it in and use it immediately).

Once the server is running, it exposes an API that allows to control FruitCast. The API then can be called for example by a chrome extension, or your own bash script if you're into that.

## Your code is really ugly
I am aware of that. I am learning. Feel free to drop a pull request though.