json.array!(@histogram_reference_diagnostics) do |histogram_reference_diagnostic|
  json.extract! histogram_reference_diagnostic, :id, :histogram_id, :reference_id, :diagnostic_id
  json.url histogram_reference_diagnostic_url(histogram_reference_diagnostic, format: :json)
end
