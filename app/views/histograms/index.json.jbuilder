json.array!(@histograms) do |histogram|
  json.extract! histogram, :id, :title, :date, :preamble
  json.url histogram_url(histogram, format: :json)
end
