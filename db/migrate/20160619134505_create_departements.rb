class CreateDepartements < ActiveRecord::Migration
  def change
    create_table :departements do |t|
      t.string :name

      t.timestamps
    end
  end
end
