class EntriesController < ApplicationController
  def index
    last_five = Entry.limit(7).order('id DESC')
    render json: last_five.to_json( :include => :question)
  end

  def create
    entry = Entry.create(title: params[:entry][:answer], question_id: params[:entry][:question][:id])
    render json: entry
  end

  def update
    entry = Entry.find(params[:id])
    entry.update(title: params[:entry][:answer], question_id: params[:entry][:question][:id])
    render json: entry
  end
end
