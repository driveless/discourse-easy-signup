discourse-easy-signup
=====================

better signup flow for [Discourse](http://discourse.org)

### Description: 
Add a `/signup` url that uses can go to to easily signup for your discourse

re this discusion on the discourse forum [Plugin to make signup modal pop up at a route](https://meta.discourse.org/t/plugin-to-make-signup-modal-pop-up-at-a-route/11486)

### Installation 

- Run `bundle exec rake plugin:install repo=https://github.com/driveless/discourse-easy-signup` in your discourse directory
- In development mode, run `bundle exec rake assets:clean`
- In production, recompile your assets: `bundle exec rake assets:precompile`


### Features:
- added oauth icons to signup dialog

#### ideas? suggetions?
make an issue or a pull request :)
