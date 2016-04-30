json.array!(@patients) do |patient|
  json.extract! patient, :id, :pseudonym, :email, :password, :birthdate, :gender
  json.url patient_url(patient, format: :json)
end
