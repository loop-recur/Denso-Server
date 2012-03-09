class Seat < ActiveRecord::Base
  has_one :preference
  
  def to_hash
    loaded_preference.attributes
  end
  
  def loaded_preference
    @loaded_preference ||= (preference || build_preference)
  end
  
    
end
