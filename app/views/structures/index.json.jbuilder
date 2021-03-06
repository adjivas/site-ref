json.array!(@structures) do |structure|
  json.extract! structure, :id, :name, :juridical_id, :description, :address, :longitude, :latitude, :email, :phone, :link, :departement_id, :published, :message, :reply, :user_id, :admin_id, :approved
  json.url structure_url(structure, format: :json)
end
