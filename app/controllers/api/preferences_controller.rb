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
    
    render(:json => cars_profile.to_hash)
  end
  
  def update
    Rails.logger.info("\n\n\n========IN UPDATE: #{params.inspect}=======\n\n\n")
    return update_profile if(params[:profile])
    return update_preferences if(params[:preferences])
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

  def update_profile
    @profile = params[:save_as_new] ? Profile.new : Profile.find(params[:id])
    @profile.bind(params[:profile])
    @profile.save ? render(:json => @profile.to_hash) : render(:json => @profile.errors, :status => 400)
  end
  
  def update_preferences
    @preference = params[:save_as_new] ? Preference.new : Preference.find(params[:id])
    @preference.bind(params[:preferences])
    @preference.save ? render(:json => @preference.to_hash) : render(:json => @preference.errors, :status => 400)
  end  
end

end
