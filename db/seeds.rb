# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Emanuel', :city => cities.first)

get_file = lambda{ |file| File.open("#{Rails.root}/config/canned_data/"+file) }

puts("Creating admins...")
User.create(:email => "contact@looprecur.com", :password => "Secret123",:password_confirmation => "Secret123")
User.create(:email => "admin@denso.com", :password => "Secret123",:password_confirmation => "Secret123")
puts("Admins created.")
puts("username: admin@denso.com,  password: Secret123")
puts("Creating hangman...")
App.create!(:name => "Hangman", :description => "A game of wits and letters.", :image => get_file["hangman/image.png"], :package => get_file["hangman/hangman.zip"], :price => "2.99")
puts("Hangman created.")
