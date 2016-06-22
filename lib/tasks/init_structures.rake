#lib/tasks/import.rake
require 'csv'

# rake import
desc "Imports a CSV file into an Structure table"
task :import, [:filename] => :environment do    
#    CSV.foreach('db/structures.csv', :headers => true) do |row|
#	c = Structure.new()
#        c.name = row['name']
#        c.juridical_id = row['juridical_id']
#        c.description = row['description']
#        c.address = row['address']
#        c.longitude = row['longitude']
#        c.latitude = row['latitude']
#        c.email = row['email']
#        c.phone = row['phone']
#        c.link = row['link']
#	c.approved = true
#	c.save
    end
end
