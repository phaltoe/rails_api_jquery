class Course < ApplicationRecord
  validates :name, :details, presence: true
end
