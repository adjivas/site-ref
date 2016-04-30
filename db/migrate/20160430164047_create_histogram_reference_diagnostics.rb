class CreateHistogramReferenceDiagnostics < ActiveRecord::Migration
  def change
    create_table :histogram_reference_diagnostics do |t|

      t.timestamps null: false
    end
  end
end
