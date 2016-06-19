class Structure < ActiveRecord::Base
  belongs_to :juridical
  belongs_to :departement
  belongs_to :user
  belongs_to :admin

  geocoded_by :address
  after_validation :geocode
end
