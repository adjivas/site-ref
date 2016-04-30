json.array!(@tutors) do |tutor|
  json.extract! tutor, :id, :pseudonym, :email, :password
  json.url tutor_url(tutor, format: :json)
end
