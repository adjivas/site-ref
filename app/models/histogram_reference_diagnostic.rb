class HistogramReferenceDiagnostic < ActiveRecord::Base
  belongs_to :histogram
  belongs_to :reference
  belongs_to :diagnostic
end
