class LocaleLooper
    def self.run
        I18n.available_locales.each do |locale|
            next if I18n.default_locale == locale
            I18n.locale = locale
            yield if block_given?
        end
        I18n.locale = I18n.default_locale
    end
end