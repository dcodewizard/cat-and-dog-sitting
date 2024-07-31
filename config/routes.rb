Rails.application.routes.draw do
  resources :bookings, only: %i[create index]
end
