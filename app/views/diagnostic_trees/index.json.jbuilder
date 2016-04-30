json.array!(@diagnostic_trees) do |diagnostic_tree|
  json.extract! diagnostic_tree, :id, :diagnostic_id, :diagnostic_id
  json.url diagnostic_tree_url(diagnostic_tree, format: :json)
end
