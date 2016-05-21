class CreateUsabilities < ActiveRecord::Migration
  def change
    create_table :usabilities do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
