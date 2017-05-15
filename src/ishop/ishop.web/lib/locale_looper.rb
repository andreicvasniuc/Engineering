class LocaleLooper
    def self.run
        initial_locale = I18n.locale

        I18n.available_locales.each do |locale|
            next if I18n.locale == locale
            I18n.locale = locale
            yield if block_given?
        end

        I18n.locale = initial_locale
    end
end