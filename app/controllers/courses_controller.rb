class CoursesController < ApplicationController

  def index
    @courses = Course.all
    render json: @courses
  end

  def create
    course = Course.new(name: params[:name], details: params[:details])

    if course.save
      render json: course
    else
      render json: {error: "Your course failed to save"}, status: 400
    end
  end
end
