class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.belongs_to :profile, :app
      t.timestamps
    end
  end
end
