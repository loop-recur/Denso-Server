class AddFavoriteToFavorites < ActiveRecord::Migration
  def change
    add_column :favorites, :favorite, :boolean
  end
end
