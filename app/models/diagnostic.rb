class Diagnostic < ActiveRecord::Base
  belongs_to :diagnostic
  belongs_to :departement 
  has_many :diagnostic
end
