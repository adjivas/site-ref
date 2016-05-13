class Paper < ActiveRecord::Base
  belongs_to :diagnostic
  belongs_to :proposition
end
