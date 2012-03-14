class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.string :name, :address, :phone, :rating_img_url, :latitude, :longitude
      t.belongs_to :profile
      t.timestamps
    end
  end
end
