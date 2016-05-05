class Map < ActiveRecord::Base
  belongs_to :type_map
  geocoded_by :address
  after_validation :geocode
end
