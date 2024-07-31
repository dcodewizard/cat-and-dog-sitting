# config/application.rb
module CatAndDogSitting
  class Application < Rails::Application
    # Other configurations...

    # CORS configuration
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins ENV[FRONTEND_URL]
        resource '*',
          headers: :any,
          methods: [:get, :post, :patch, :put, :delete, :options, :head],
          credentials: true
      end
    end
  end
end
