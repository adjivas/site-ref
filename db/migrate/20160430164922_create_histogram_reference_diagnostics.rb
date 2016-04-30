class CreateHistogramReferenceDiagnostics < ActiveRecord::Migration
  def change
    create_table :histogram_reference_diagnostics do |t|
      t.references :histogram, index: true, foreign_key: true
      t.references :reference, index: true, foreign_key: true
      t.references :diagnostic, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
