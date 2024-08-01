# spec/factories/bookings.rb
FactoryBot.define do
  factory :booking do
    first_name { 'John' }
    last_name { 'Doe' }
    animal_name { 'Fluffy' }
    animal_type { 'cat' }
    hours_requested { 3 }
    date_of_service { '2024-07-31' }
    price { 35 }
  end
end
