#lib/tasks/import.rake
require 'csv'

# rake import
desc "Imports a CSV file into an Project table"
task :import_project, [:filename] => :environment do
  CSV.foreach('db/projects.csv', :headers => true) do |row|
    c = Project.new()
    c.name = row['name']
    c.description = row['description']
    c.approved = true
    c.save
  end
end
