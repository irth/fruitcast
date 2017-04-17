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

## I want to try it anyway.
Well, I can't stop you.  
* `git clone` the repo
* run `npm install`
* run `npm run dev`
* point your browser to `http://localhost:8080`
* make API requests.

If you have [HTTPie](https://httpie.org/) installed (which I recommend, it's really cool), try out the following:

```bash
    # Load the player
    http POST :8080/api/stream/youtube id=dQw4w9WgXcQ  # this song is my jam
    
    # Control the playback
    http POST :8080/api/controls/play
    http POST :8080/api/controls/pause
    http POST :8080/api/controls/stop

    # Control the volume (value from 0 to 100)
    http POST :8080/api/controls/volume volume=42  # JSON body, {"volume": 42}
```

## Your code is really ugly
I am aware of that. I am learning. Feel free to drop a pull request though.