# name: Discoure Easy Signup
# about: /signup plugin for Discourse. adds a smoother signup flow
# version: 0.1
# authors: williscool

register_asset 'javascripts/signup.js', :server_side

after_initialize do
  Discourse::Application.routes.prepend do
    get 'signup' => 'list#latest'
  end
end
