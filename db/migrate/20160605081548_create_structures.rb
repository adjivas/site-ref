class CreateStructures < ActiveRecord::Migration
  def change
    create_table :structures do |t|
      t.string :name
      t.references :juridical, index: true, foreign_key: true
      t.string :description
      t.string :address
      t.float :longitude
      t.float :latitude
      t.string :email
      t.string :phone
      t.string :link
      t.references :departement, index: true, foreign_key: true
      t.date :published
      t.text :message
      t.text :reply
      t.references :user, index: true, foreign_key: true
      t.integer :approved

      t.timestamps null: false
    end
  end
end
