json.array!(@departements) do |departement|
  json.extract! departement, :id, :name
  json.url departement_url(departement, format: :json)
end
