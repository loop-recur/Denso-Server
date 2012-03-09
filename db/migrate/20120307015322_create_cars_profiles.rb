class CreateCarsProfiles < ActiveRecord::Migration
  def change
    create_table :cars_profiles do |t|
      t.belongs_to :car, :profile
      t.timestamps
    end
  end
end
