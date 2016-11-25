# SiteRef - Docker

[![travis-badge][]][travis] [![license-badge][]][license]

[travis-badge]: https://travis-ci.org/adjivas/site-ref.svg?branch=docker&style=flat-square
[travis]: https://travis-ci.org/adjivas/site-ref
[license-badge]: https://img.shields.io/badge/license-GPL_3-green.svg?style=flat-square

### How to use
```shell
git clone -b docker https://github.com/adjivas/site-ref.git && cd site-ref/debian
make run
```

### How to use at 42 and in 2016
```shell
zsh --login "/Applications/Docker/Docker Quickstart Terminal.app/Contents/Resources/Scripts/start.sh"
# If `there is any problem of certificat`, do this and retry the back command.
# ```shell
# ^D
# docker-machine rm default
# docker-machine --debug regenerate-certs -f default
# docker-machine --debug env default
# ```
# If `Host does not exist: "default"`
# docker-machine create --driver virtualbox default
# eval $(docker-machine env default)
# ```
git clone -b docker https://github.com/adjivas/site-ref.git && cd site-ref/debian
make run
```

### Directory-Tree
```shell
.
├──  README.md
├── , arch
│   ├── Dockerfile
│   └── Makefile
└── , debian
    ├──  Dockerfile
	└──  Makefile
```

### License
*SiteRef/Docker*'s code in this repo uses the [GNU GPL v3](http://www.gnu.org/licenses/gpl-3.0.html) [license][license].

[license]: LICENSE
