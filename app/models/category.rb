class Category < ActiveRecord::Base
  has_many :app_categories
  has_many :apps, :through => :app_categories
  scope :by_name, proc {|name| where(["name LIKE ?", "%#{name}%"]) }
end
