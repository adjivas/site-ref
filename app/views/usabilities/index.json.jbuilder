json.array!(@usabilities) do |usability|
  json.extract! usability, :id, :name
  json.url usability_url(usability, format: :json)
end
