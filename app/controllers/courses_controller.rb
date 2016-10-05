class CoursesController < ApplicationController

  def index
    @courses = Course.all
    render json: @courses
  end

  def create
    course = Course.create(name: params[:name], details: params[:details])

    render json: course
  end
end
