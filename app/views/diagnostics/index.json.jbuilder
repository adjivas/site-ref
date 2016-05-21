json.array!(@diagnostics) do |diagnostic|
  json.extract! diagnostic, :id, :name, :description, :help, :adult, :duration, :diagnostic_id, :departement_id
  json.url diagnostic_url(diagnostic, format: :json)
end
