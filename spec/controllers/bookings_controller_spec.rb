# spec/controllers/bookings_controller_spec.rb
require 'rails_helper'

RSpec.describe BookingsController, type: :controller do
  describe "GET #index" do
    it "returns a success response" do
      create(:booking)
      get :index
      expect(response).to be_successful
      expect(JSON.parse(response.body)).to have_key('bookings')
    end
  end

  describe "POST #create" do
    context "with valid parameters" do
      it "creates a new Booking" do
        expect {
          post :create, params: { booking: attributes_for(:booking) }
        }.to change(Booking, :count).by(1)
      end

      it "renders a JSON response with the new booking" do
        post :create, params: { booking: attributes_for(:booking) }
        expect(response).to have_http_status(:created)
        expect(JSON.parse(response.body)).to have_key('booking')
      end
    end

    context "with invalid parameters" do
      it "does not create a new Booking" do
        expect {
          post :create, params: { booking: attributes_for(:booking, first_name: '') } # Invalid data
        }.to change(Booking, :count).by(0)
      end

      it "renders a JSON response with errors for the new booking" do
        post :create, params: { booking: attributes_for(:booking, first_name: '') }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)).to have_key('error')
      end
    end
  end
end
