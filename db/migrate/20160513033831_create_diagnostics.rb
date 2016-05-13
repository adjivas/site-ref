class CreateDiagnostics < ActiveRecord::Migration
  def change
    create_table :diagnostics do |t|
      t.string :name
      t.text :description
      t.string :help
      t.integer :adult
      t.references :diagnostic, index: true, foreign_key: true
      t.references :departement, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
