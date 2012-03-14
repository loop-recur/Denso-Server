# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120314034646) do

  create_table "app_categories", :id => false, :force => true do |t|
    t.integer "app_id"
    t.integer "category_id"
  end

  create_table "apps", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.string   "package_file_name"
    t.string   "package_content_type"
    t.integer  "image_file_size"
    t.integer  "package_file_size"
    t.integer  "price_in_cents"
    t.datetime "image_updated_at"
    t.datetime "package_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "featured"
    t.boolean  "installed",            :default => false
  end

  create_table "cars", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image"
  end

  create_table "cars_profiles", :force => true do |t|
    t.integer  "car_id"
    t.integer  "profile_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "categories", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

  create_table "favorites", :force => true do |t|
    t.string   "name"
    t.string   "address"
    t.string   "phone"
    t.string   "rating_img_url"
    t.string   "latitude"
    t.string   "longitude"
    t.integer  "profile_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "preferences", :force => true do |t|
    t.integer  "seat_id"
    t.boolean  "seat_heater"
    t.boolean  "airbags"
    t.integer  "temp_level"
    t.integer  "ac_level"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "ac_on"
    t.boolean  "defrost_on"
  end

  create_table "profiles", :force => true do |t|
    t.string   "name"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "purchases", :force => true do |t|
    t.integer  "profile_id"
    t.integer  "app_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "seats", :force => true do |t|
    t.string   "kind"
    t.integer  "cars_profile_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "email",                                 :default => "", :null => false
    t.string   "encrypted_password",     :limit => 128, :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                         :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
