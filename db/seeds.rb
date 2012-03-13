get_file = lambda{ |file| File.open("#{Rails.root}/config/canned_data/"+file) }

puts("Creating admins...")
User.create(:email => "contact@looprecur.com", :password => "Secret123",:password_confirmation => "Secret123")
User.create(:email => "admin@denso.com", :password => "Secret123",:password_confirmation => "Secret123")
puts("Admins created.")
puts("username: admin@denso.com,  password: Secret123")

puts("Creating hangman...")
App.create!(:name => "Hangman", :description => "A game of wits and letters.", :image => get_file["hangman/image.png"], :package => get_file["hangman/hangman.zip"], :price => "2.99")
puts("Hangman created.")

puts("Creating hangman2...")
App.create!(:name => "Hangman2", :description => "A game of more wits and letters.", :image => get_file["hangman2/image.png"], :package => get_file["hangman2/hangman2.zip"], :price => "2.99")
puts("Hangman2 created.")

puts("Creating hangman3...")
App.create!(:name => "Hangman3", :description => "A game of more more wits and letters.", :image => get_file["hangman3/image.png"], :package => get_file["hangman3/hangman3.zip"], :price => "2.99")
puts("Hangman3 created.")

puts("Creating Memory 1...")
App.create!(:name => "Memory 1", :description => "Test your memory. With Tiles!.", :image => get_file["memory1/image.png"], :package => get_file["memory1/memory1.zip"], :price => "10.99", :featured => true)
puts("Memory 1 created.")

puts("Creating Memory 2...")
App.create!(:name => "Memory 2", :description => "From the makers of Memory 1, comes Memory 2. More Memory", :image => get_file["memory2/image.png"], :package => get_file["memory2/memory2.zip"], :price => "12.99")
puts("Memory 2 created.")

puts("Creating Memory 3...")
App.create!(:name => "Memory 3", :description => "From the makers of Memory 1, and Memory 2. Memory 3.", :image => get_file["memory3/image.png"], :package => get_file["memory3/memory3.zip"], :price => "12.99")
puts("Memory 3 created.")

puts("Creating Hangman Apk...")
App.create!(:name => "Hangman Apk", :description => "Hangman as an android app!", :image => get_file["hangman_apk/image.png"], :package => get_file["hangman_apk/hangman.apk"], :price => "19.99")
puts("Hangman Apk created.")

puts("Creating Categories...")

puts("Creating Media Category...")
Category.create(:name => 'Media')

puts("Creating Social Category...")
Category.create(:name => 'Social')

puts("Creating Games Category...")
Category.create(:name => 'Games')

puts("Creating Stats Category...")
Category.create(:name => 'Stats')

puts("Creating Shopping Category...")
Category.create(:name => 'Shopping')

puts("Creating Shopping Category...")
Category.create(:name => 'Car')

puts("Associating Hangman apps with Games Category")
games_category = Category.find_by_name('Games')
hangman_apps = App.where('name LIKE ?', '%hangman%')
hangman_apps.each {|a| games_category.apps << a}

puts("Associating Memory apps with Stats Category")
stats_category = Category.find_by_name('Social')
memory_apps = App.where('name LIKE ?', '%memory%')
memory_apps.each {|a| stats_category.apps << a}
