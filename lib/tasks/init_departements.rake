#lib/tasks/import.rake
require 'csv'

# rake import
desc "Imports a CSV file into an Departement table"
task :import, [:filename] => :environment do
  CSV.foreach('db/departements.csv', :headers => true) do |row|
    c = Departement.new()
    c.name = row['name']
    c.save
  end
end
