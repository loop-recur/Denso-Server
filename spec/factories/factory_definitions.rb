Factory.define :app do |f|
  f.name "MyString"
  f.description "MyText"
end

Factory.define :user do |f|
  f.email { Factory.next(:email) }
  f.password  "MyString"
  f.password_confirmation "MyString"
end

Factory.sequence :email do |n|
  "somebody#{n}@whatevs.com"
end
