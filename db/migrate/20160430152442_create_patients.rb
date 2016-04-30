class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.string :pseudonym
      t.string :email
      t.string :password
      t.date :birthdate
      t.integer :gender

      t.timestamps null: false
    end
  end
end
