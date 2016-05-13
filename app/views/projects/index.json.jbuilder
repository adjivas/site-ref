json.array!(@projects) do |project|
  json.extract! project, :id, :name, :from, :link, :notation, :interoperable, :customizable, :relation_id, :usability_id, :proposition_id
  json.url project_url(project, format: :json)
end
