class CreateApps < ActiveRecord::Migration
  def change
    create_table :apps do |t|
      t.string :name
      t.text :description
      t.string :image_file_name, :image_content_type, :package_file_name, :package_content_type
      t.integer :image_file_size, :package_file_size, :price_in_cents
      t.datetime :image_updated_at, :package_updated_at
      t.timestamps
    end
  end
end
