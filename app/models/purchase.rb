class Purchase < ActiveRecord::Base
  belongs_to :app
  
  def to_hash
    app.to_hash
  end
end
