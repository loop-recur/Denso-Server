class AddExtraPrefs < ActiveRecord::Migration
  def up
    add_column :preferences, :ac_on, :boolean
    add_column :preferences, :defrost_on, :boolean
  end

  def down
    remove_column :preferences, :ac_on
    remove_column :preferences, :defrost_on
  end
end
