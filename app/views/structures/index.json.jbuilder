json.array!(@structures) do |structure|
  json.extract! structure, :id, :name, :juridical_id, :description, :address, :longitude, :latitude, :email, :phone, :link, :departement_id, :proposition_id
  json.url structure_url(structure, format: :json)
end
