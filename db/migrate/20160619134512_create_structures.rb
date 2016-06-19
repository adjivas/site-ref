class CreateStructures < ActiveRecord::Migration
  def change
    create_table :structures do |t|
      t.string :name
      t.references :juridical, index: true
      t.string :description
      t.string :address
      t.float :longitude
      t.float :latitude
      t.string :email
      t.string :phone
      t.string :link
      t.references :departement, index: true
      t.date :published
      t.text :message
      t.text :reply
      t.references :user, index: true
      t.references :admin, index: true
      t.integer :approved

      t.timestamps
    end
  end
end
