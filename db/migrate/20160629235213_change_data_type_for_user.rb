class ChangeDataTypeForUser < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.change :gender, :boolean
    end
  end
  def self.down
    change_table :users do |t|
      t.change :gender, :integer
    end
  end
end
