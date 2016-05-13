json.array!(@papers) do |paper|
  json.extract! paper, :id, :name, :description, :published, :diagnostic_id, :proposition_id
  json.url paper_url(paper, format: :json)
end
