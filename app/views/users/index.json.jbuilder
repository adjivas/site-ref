json.array!(@users) do |user|
  json.extract! user, :id, :link, :patient, :gender, :birthdate, :begin, :end, :departement_id, :diagnostic_id
  json.url user_url(user, format: :json)
end
