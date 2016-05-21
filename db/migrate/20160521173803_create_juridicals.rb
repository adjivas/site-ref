class CreateJuridicals < ActiveRecord::Migration
  def change
    create_table :juridicals do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
