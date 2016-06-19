json.array!(@projects) do |project|
  json.extract! project, :id, :name, :link, :description, :from, :logo, :published, :message, :reply, :user_id, :admin_id, :approved
  json.url project_url(project, format: :json)
end
