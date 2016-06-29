#lib/tasks/import.rake
require 'csv'

# rake import
desc "Imports a CSV file into an Paper table"
task :import_paper, [:filename] => :environment do
  CSV.foreach('db/papers.csv', :headers => true) do |row|
    c = Paper.new()
    c.name = row['name']
    c.description = row['description']
    c.published = row['published']
    c.save
  end
end
