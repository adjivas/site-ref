class User < ActiveRecord::Base
  belongs_to :departement
  belongs_to :diagnostic
end
