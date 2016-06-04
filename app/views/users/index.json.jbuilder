json.array!(@users) do |user|
  json.extract! user, :id, :link, :gender, :birthdate, :patient, :begin, :end, :info_research, :email_research, :departement_id, :diagnostic_id
  json.url user_url(user, format: :json)
end
