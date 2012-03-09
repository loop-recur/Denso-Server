class CarsProfile < ActiveRecord::Base
  belongs_to :car
  belongs_to :profile
  has_many :seats
  
  def to_hash
    seats.inject({}){ |h,s| h.merge(s.kind => s.to_hash) }
  end  
end
