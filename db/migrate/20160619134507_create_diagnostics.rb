class CreateDiagnostics < ActiveRecord::Migration
  def change
    create_table :diagnostics do |t|
      t.string :name
      t.text :description
      t.string :help
      t.integer :adult
      t.date :duration
      t.references :diagnostic, index: true
      t.references :departement, index: true

      t.timestamps
    end
  end
end
