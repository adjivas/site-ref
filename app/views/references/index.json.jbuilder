json.array!(@references) do |reference|
  json.extract! reference, :id, :type, :link
  json.url reference_url(reference, format: :json)
end
