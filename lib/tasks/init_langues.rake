#lib/tasks/import.rake
require 'csv'

# rake import
desc "Imports a CSV file into an Language table"
task :import_language, [:filename] => :environment do
  CSV.foreach('db/langues.csv', :headers => true) do |row|
    c = Language.new()
    c.name = row['name']
    c.save
  end
end
