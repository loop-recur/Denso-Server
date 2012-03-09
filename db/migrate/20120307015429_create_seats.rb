class CreateSeats < ActiveRecord::Migration
  def change
    create_table :seats do |t|
      t.string :kind
      t.belongs_to :cars_profile
      t.timestamps
    end
  end
end
