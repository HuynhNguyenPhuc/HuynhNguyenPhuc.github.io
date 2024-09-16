module Jekyll
    module Slugify
      def slugify(input)
        input.to_s.downcase
             .gsub(/[^a-z0-9\s-]/, '') # Remove non-alphanumeric characters
             .strip
             .gsub(/\s+/, '-') # Replace whitespace with hyphens
             .gsub(/-+/, '-') # Replace multiple hyphens with a single hyphen
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::Slugify)  