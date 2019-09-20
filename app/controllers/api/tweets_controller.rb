class Api::TweetsController < ApplicationController
  def index
    # ajaxから最新のtweetのid
    last_tweet_id = params[:id]
    # 表示上の最新tweetより新しいtweetだけ取得する
    @tweets = Tweet.includes(:user).where("id > #{last_tweet_id}").page(params[:page]).per(5).order("created_at DESC")
  end
end
