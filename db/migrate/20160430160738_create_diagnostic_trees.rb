class CreateDiagnosticTrees < ActiveRecord::Migration
  def change
    create_table :diagnostic_trees do |t|
      t.references :diagnostic, index: true, foreign_key: true
      t.references :diagnostic, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
