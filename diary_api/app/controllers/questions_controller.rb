class QuestionsController < ApplicationController

  def index
    questions = Question.all.sample(3)
    render json: questions
  end
end
