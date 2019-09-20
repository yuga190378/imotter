json.array! @tweets do |tweet|
  json.id tweet.id
  json.text tweet.text
  json.user_id tweet.user_id
  json.user_name tweet.user.nickname
  json.comment_count tweet.comments.count
end