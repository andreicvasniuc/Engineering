Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  config.debug_exception_response_format = :api

  # Raises error for missing translations
  # config.action_view.raise_on_missing_translations = true

  config.action_dispatch.default_headers = {
      'Access-Control-Allow-Origin' => 'http://localhost:8080',
      'Access-Control-Request-Method' => %w{GET POST PUT DELETE}.join(",")
  }

  config.middleware.insert_before 0, "Rack::Cors", :debug => true, :logger => (-> { Rails.logger }) do
      allow do
        origins '*'

        resource '/cors',
          :headers => :any,
          :methods => [:post],
          :credentials => true,
          :max_age => 0

        resource '*',
          :headers => :any,
          :methods => [:get, :post, :delete, :put, :patch, :options, :head],
          :max_age => 0
      end
    end

  # Set the logging destination(s)
  config.log_to = %w[stdout file]

  # Show the logging configuration on STDOUT
  config.show_log_configuration = true

  config.mongoid.logger = Logger.new($stdout, :debug)

  Mongoid.logger.level = Logger::DEBUG
  Mongoid.logger = Logger.new($stdout)
end
