# Site-Ref — French

[![Build Status](https://travis-ci.org/adjivas/site-ref.svg?branch=master&style=flat-square)](https://travis-ci.org/adjivas/site-ref)
[![Inline docs](http://inch-ci.org/github/adjivas/site-ref.svg?branch=master&style=shields)](http://inch-ci.org/github/adjivas/site-ref)
[![license-badge][]][license]

[license-badge]: https://img.shields.io/badge/license-GPL_3-green.svg?style=flat-square
[license]: LICENSE

##### Wiki
* [Authorization](https://github.com/adjivas/site-ref/wiki/Authorization)
* [Select](https://github.com/adjivas/site-ref/wiki/Select)

##### Merise'MCD-Modeling
![Screen Shot](https://raw.githubusercontent.com/adjivas/site-ref/notes/mcd.png)

##### Import basical data
```shell
rake db:migrate
rake import_departement
rake import_language
rake import_paper
rake import_structure
```

##### How to run
On _CloundLine_:
```shell
rails  server -p $PORT -b $IP
```

##### License
**SiteRef**'s code in this repo uses the [GNU GPL v3](http://www.gnu.org/licenses/gpl-3.0.html) [license](LICENSE).
