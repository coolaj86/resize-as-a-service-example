resize-as-a-service-example
===========================

A 60-second nodejs seed project for [resize-as-a-service](https://github.com/coolaj86/resize-as-a-service).

This guide will have you run this example right on your OS X or Linux laptop
with zero modifications and then tell you what you need to modify to run it
in your own service on a Digital Ocean VPS.

ScreenCast
==========

Watch the [OS X ScreenCast](http://youtu.be/1goBiTf2ErA) on YouTube.

Watch the [Setup a Digital Ocean VPS ScreenCast](http://youtu.be/ypjzi1axH2A) on YouTube.

Watch the [Ubuntu VPS ScreenCast](http://youtu.be/cgY7JPp8VAg) on YouTube.

Walkthrough
===========

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
git clone https://github.com/coolaj86/resize-as-a-service-example.git
pushd resize-as-a-service-example/
npm install
node bin/serve.js 3000
```

To test that everything is working try accessing this image in your web browser:

* <http://local.foobar3000.com:3000/resize/api?state=1&url=http://i.imgur.com/qqpxDmJ.jpg>
* <http://local.helloworld3000.com:3000/resize/api?state=1&width=100&height=200&format=gif&quality=85&url=http://i.imgur.com/qqpxDmJ.jpg>

The addresses `local.foobar3000.com` and `local.helloworld3000.com` are set to `127.0.0.1`
so they will work for testing on your local machine (but not your server).

On a Server
====

The port is set in `./bin/serve.js`.

The configuration is hard-coded in `./server.js`. Normally I would recommend pulling that out into a `config.js`.

The mountpoint is set to `/resize`, as shown in the examples, but you can change it to be whatever you want
such as `/images` or just an empty string `''`.

Likewise the api route is set to `/api`, which can be changed or ommited
(but you should have at least the mountpoint or the api route because the resize service needs a namespace).

Internally there is another route `/api/images` that is used to statically serve the cached images.

If you wanted to use a vhost instead of a domain you would set the mount to `''`

In order to test on your server you will need to use your ip address or setup DNS.

* <http://resize.example.com/api?state=1&url=http://i.imgur.com/qqpxDmJ.jpg>
* <http://example.com/resize/api?state=1&width=100&height=200&format=gif&quality=85&url=http://i.imgur.com/qqpxDmJ.jpg>

Copyright and License
===

Code and documentation copyright 2014 AJ ONeal Tech, LLC.

Code released under the [Apache license](https://github.com/coolaj86/resize-as-a-service/blob/master/LICENSE).

Docs released under [Creative Commons](https://github.com/coolaj86/resize-as-a-service/blob/master/LICENSE.DOCS).

TODO
====

Example using ssl.

Replace file storage with another storage mechanism.
