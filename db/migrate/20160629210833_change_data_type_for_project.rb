class ChangeDataTypeForProject < ActiveRecord::Migration
  def self.up
    change_table :projects do |t|
      t.change :approved, :boolean
    end
  end
  def self.down
    change_table :projects do |t|
      t.change :approved, :integer
    end
  end
end
