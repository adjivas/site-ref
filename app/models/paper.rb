class Paper < ActiveRecord::Base
  belongs_to :language
  belongs_to :diagnostic
  belongs_to :proposition
end
