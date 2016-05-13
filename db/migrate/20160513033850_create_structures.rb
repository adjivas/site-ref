class CreateStructures < ActiveRecord::Migration
  def change
    create_table :structures do |t|
      t.string :name
      t.references :juridical, index: true, foreign_key: true
      t.string :description
      t.string :address
      t.integer :longitude
      t.integer :latitude
      t.string :email
      t.string :phone
      t.references :departement, index: true, foreign_key: true
      t.references :proposition, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
