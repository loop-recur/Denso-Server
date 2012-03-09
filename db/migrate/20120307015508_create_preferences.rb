class CreatePreferences < ActiveRecord::Migration
  def change
    create_table :preferences do |t|
      t.belongs_to :seat
      t.boolean :seat_heater, :air_bags
      t.integer :temp_level, :ac_level
      t.timestamps
    end
  end
end
