class Project < ActiveRecord::Base
  belongs_to :author
  belongs_to :relation
  belongs_to :usability
  belongs_to :proposition
end
