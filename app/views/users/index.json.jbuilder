json.array!(@users) do |user|
  json.extract! user, :id, :is_admin, :link, :gender, :birthdate, :begin, :end, :info_research, :email_research, :departement_id, :diagnostic_id
  json.url user_url(user, format: :json)
end
