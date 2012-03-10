class CreateAppCategories < ActiveRecord::Migration
  def change
    create_table :app_categories, :id => false do |t|
      t.integer :app_id
      t.integer :category_id
    end
  end
end
