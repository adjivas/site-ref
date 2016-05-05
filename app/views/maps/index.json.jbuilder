json.array!(@maps) do |map|
  json.extract! map, :id, :address, :phone, :email, :description, :departement, :type_map_id
  json.url map_url(map, format: :json)
end
