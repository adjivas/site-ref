class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :link
      t.string :description
      t.date :published
      t.text :logo
      t.references :proposition, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
