class AddFeaturedToApp < ActiveRecord::Migration
  def change
    add_column :apps, :featured, :boolean
  end
end
