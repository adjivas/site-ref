class ChangeLongitudeFormatInStructures < ActiveRecord::Migration
  def change
    change_column :structures, :longitude, :float
  end
end
