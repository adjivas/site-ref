json.array!(@type_maps) do |type_map|
  json.extract! type_map, :id, :description
  json.url type_map_url(type_map, format: :json)
end
