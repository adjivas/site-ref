class CreateDiagnostics < ActiveRecord::Migration
  def change
    create_table :diagnostics do |t|
      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
