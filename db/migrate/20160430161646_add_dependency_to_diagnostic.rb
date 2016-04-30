class AddDependencyToDiagnostic < ActiveRecord::Migration
  def change
    add_column :diagnostics, :dependency, :integer
    add_reference :diagnostics, :dependency, index: true
  end
end
