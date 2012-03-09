class RenameAirbags < ActiveRecord::Migration
  def up
    rename_column :preferences, :air_bags, :airbags
  end

  def down
    rename_column :preferences, :airbags, :air_bags
  end
end
