class Booking < ApplicationRecord
  validates :first_name, :last_name, :animal_name, :hours_requested, :date_of_service, presence: true
  validates :hours_requested, numericality: { only_integer: true, greater_than_or_equal_to: 2, less_than_or_equal_to: 8 }

  enum animal_type: { cat: 0, dog: 1 }
end