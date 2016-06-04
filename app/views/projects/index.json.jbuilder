json.array!(@projects) do |project|
  json.extract! project, :id, :name, :link, :description, :published, :logo, :proposition_id
  json.url project_url(project, format: :json)
end
