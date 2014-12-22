resize-as-a-service-example
===========================

A 60-second nodejs seed project for resize-as-a-service.

This guide will have you run this example right on your OS X or Linux laptop
with zero modifications and then tell you what you need to modify to run it
in your own service on a Digital Ocean VPS.

If you don't have the basic development tools installed (git, node, npm, gcc) already,
just run this script and it will install the basics on any recent version of ubuntu or osx.

```bash
# Ubuntu and OS X
curl -fsSL bit.ly/easy-install-node | bash

# On older versions of Ubuntu
wget -nv bit.ly/easy-install-node -O - | bash
```

You'll need graphicsmagick and or imagemagick installed

```bash
# OS X
brew install graphicsmagick imagemagick

# Ubuntu
sudo apt-get install graphicsmagick imagemagick
```

And now you're ready to run the example

```bash
git clone git@github.com:coolaj86/resize-as-a-service-example.git
pushd resize-as-a-service-example/
npm install
node bin/serve 3000
```

To test that everything is working try accessing this image in your web browser:

<http://local.foobar3000.com:3000/resize/api?state=1&url=http://i.imgur.com/57RKZdJ.jpg>
<http://local.foobar3000.com:3000/resize/api?state=1&width=100&height=200&format=gif&quality=85&url=http://i.imgur.com/57RKZdJ.jpg>

TODO
====

Example using ssl.
