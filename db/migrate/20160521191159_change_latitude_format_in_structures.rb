class ChangeLatitudeFormatInStructures < ActiveRecord::Migration
  def change
    change_column :structures, :latitude, :float
  end
end
