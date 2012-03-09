class Car < ActiveRecord::Base
  after_initialize :set_defaults


private

  def set_defaults
    self[:name] ||= "New Car #{id}"
  end

end
