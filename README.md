# pm2-server-runner
A wrapper for servers and such that aren't node js, so they can be run easily with pm2


# ok? but why?
I have recently become very interested in PM2 after finding the beautiful web interface on pm2.io. I'd like to run more servers then just node servers but it makes it harder to monitor and run commands. I thought about it, and realised that I could probably make a wrapper that does the stuff I need.


# soooooo how do I use it?
Well, there should be a template here. Theoretically you just plug in the command and command switches and run it. There's also an express endpoint to forward commands, it's up to you to use it.


(Also, since I have finished this yet, all of this might be useless and might actually interrupt functionality with pm2 such as autorestart. I assume I can send some sort of signal to node if the app crashes but I haven't really looked into it yet. Guess we'll see, huh? I also haven't really looked to see if other people have done it or done better, but I don't really care about that.)
