module Api
  
class PreferencesController < ApplicationController
  
  def index
    @cars_profile = CarsProfile.find_by_car_id_and_profile_id(params[:car_id], params[:profile_id])
    render(:json => @cars_profile.to_hash)
  end
  
  def create
    profile.update_attributes(params[:profile])
    car.update_attributes(params[:car])
    
    params[:preferences].map do |k,v|
      seat = cars_profile.seats.find_or_create_by_kind(:kind => k)
      seat.loaded_preference.update_attributes(v)
    end
    
    render(:json => Profile.all.map(&:to_hash))
  end
  
private
  
  def profile
    @profile ||= Profile.find_by_id(params[:profile_id]) || Profile.create
  end
  
  def car
    @car ||= Car.find_by_id(params[:car_id]) || Car.create
  end
  
  def cars_profile
    @cars_profile ||= CarsProfile.find_or_create_by_car_id_and_profile_id(car.id, profile.id)
  end

end

end
