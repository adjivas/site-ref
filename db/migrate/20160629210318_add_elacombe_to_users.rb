class AddElacombeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :elacombe, :text
  end
end
