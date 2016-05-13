json.array!(@users) do |user|
  json.extract! user, :id, :pseudonym, :link, :patient, :gender, :birthdate, :begin, :end, :departement_id
  json.url user_url(user, format: :json)
end
