class TutorPatient < ActiveRecord::Base
  belongs_to :tutor
  belongs_to :patient
end
