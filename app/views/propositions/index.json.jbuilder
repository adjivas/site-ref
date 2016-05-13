json.array!(@propositions) do |proposition|
  json.extract! proposition, :id, :published, :message, :reply, :user_id, :approved
  json.url proposition_url(proposition, format: :json)
end
