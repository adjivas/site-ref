json.array!(@diagnostics) do |diagnostic|
  json.extract! diagnostic, :id, :title, :description
  json.url diagnostic_url(diagnostic, format: :json)
end
