#lib/tasks/import.rake
require 'csv'

# rake import
desc "Imports a CSV file into an Langue table"
task :import, [:filename] => :environment do
  CSV.foreach('db/langues.csv', :headers => true) do |row|
    c = Langue.new()
    c.name = row['name']
    c.save
  end
end
