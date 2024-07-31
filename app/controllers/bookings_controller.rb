class BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  
  def index
    bookings = Booking.all
    render json: { bookings: bookings }
  end

  def create
    booking = Booking.new(booking_params)
    if booking.save
      render json: { booking: booking }, status: :created
    else
      render json: { error: 'Failed to create booking' }, status: :unprocessable_entity
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:first_name, :last_name, :hours_requested, :animal_name, :animal_type, :date_of_service, :price)
  end
end
