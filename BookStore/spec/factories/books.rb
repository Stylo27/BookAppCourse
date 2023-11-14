FactoryBot.define do
  factory :book do
    name { Faker::Book.title }
    description { Faker::Lorem.paragraph }
    author { Faker::Book.author }
    genre { Faker::Book.genre }
    rating { 1.5 }
  end
end
