class Api::V1::SeatsController < ApplicationController
  def index
    render json: Seat.all, adapter: :json
  end
end
