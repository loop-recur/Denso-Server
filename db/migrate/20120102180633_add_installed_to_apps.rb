class AddInstalledToApps < ActiveRecord::Migration
  def change
    add_column :apps, :installed, :boolean, :default => false
  end
end
