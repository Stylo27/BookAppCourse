class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :name
      t.text :description
      t.string :author
      t.string :genre
      t.float :rating

      t.timestamps
    end
  end
end
