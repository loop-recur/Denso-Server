class Preference < ActiveRecord::Base
  after_initialize :set_defaults


private

  def set_defaults
    self[:temp_level] ||= 1
    self[:ac_level] ||= 1
  end
end
