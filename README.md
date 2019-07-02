# TaCoS 29 webpage

This is the webpage of TaCoS 29. It is based on the website of the [travis foundation](https://foundation.travis-ci.org/).

In order to get working forms, we used the following [little flask project](https://github.com/namednil/flask_tacos) as backend that runs on the server.

We used an mybb forum to help people find a couch during their stay. The forum is populated with users by a little script that extracts user names from the database and inserts them into the mybb database.

## Edit things

The program can be changed in the _data/ directory.

## Run locally

This page uses [Jekyll](http://jekyllrb.org).

To run it locally clone the repo and `cd` into it.

Within the repo run `$ bundle install` and then `$ bundle exec jekyll serve` to run a development server locally.

## Deploy

Push your changes. Go to the server, pull and then execute 
```
bundle exec jekyll build -d /tmp/jekyll
cp -r /tmp/jekyll/* /var/www/
```

