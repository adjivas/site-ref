class Diagnostic < ActiveRecord::Base
  belongs_to :diagnostic
  belongs_to :departement
end
