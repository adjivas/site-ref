class ChangeDataTypeForStructure < ActiveRecord::Migration
  def self.up
    change_table :structures do |t|
      t.change :approved, :boolean
    end
  end
  def self.down
    change_table :structures do |t|
      t.change :approved, :integer
    end
  end
end
