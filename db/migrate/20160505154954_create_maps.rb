class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.string :address
      t.string :phone
      t.string :email
      t.string :description
      t.string :departement
      t.TypeMap :type

      t.timestamps null: false
    end
  end
end
