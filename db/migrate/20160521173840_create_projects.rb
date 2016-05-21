class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.references :author, index: true, foreign_key: true
      t.string :link
      t.string :link
      t.integer :notation
      t.integer :interoperable
      t.integer :customizable
      t.references :relation, index: true, foreign_key: true
      t.references :usability, index: true, foreign_key: true
      t.references :proposition, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
