json.array!(@maps) do |map|
  json.extract! map, :id, :address, :phone, :email, :description, :departement, :type
  json.url map_url(map, format: :json)
end
