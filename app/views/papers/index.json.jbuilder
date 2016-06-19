json.array!(@papers) do |paper|
  json.extract! paper, :id, :name, :link, :description, :from, :language_id, :diagnostic_id, :published, :message, :reply, :user_id, :admin_id, :approved
  json.url paper_url(paper, format: :json)
end
