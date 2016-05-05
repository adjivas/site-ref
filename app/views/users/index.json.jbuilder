json.array!(@users) do |user|
  json.extract! user, :id, :latitude, :longitude, :address, :descritption, :title
  json.url user_url(user, format: :json)
end
