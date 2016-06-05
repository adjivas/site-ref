json.array!(@projects) do |project|
  json.extract! project, :id, :name, :link, :description, :published, :logo, :published, :message, :reply, :user_id, :approved
  json.url project_url(project, format: :json)
end
