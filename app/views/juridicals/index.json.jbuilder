json.array!(@juridicals) do |juridical|
  json.extract! juridical, :id, :name
  json.url juridical_url(juridical, format: :json)
end
