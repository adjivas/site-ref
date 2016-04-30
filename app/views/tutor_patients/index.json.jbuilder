json.array!(@tutor_patients) do |tutor_patient|
  json.extract! tutor_patient, :id, :tutor_id, :patient_id
  json.url tutor_patient_url(tutor_patient, format: :json)
end
