json.array!(@histogram_reference_diagnostics) do |histogram_reference_diagnostic|
  json.extract! histogram_reference_diagnostic, :id
  json.url histogram_reference_diagnostic_url(histogram_reference_diagnostic, format: :json)
end
