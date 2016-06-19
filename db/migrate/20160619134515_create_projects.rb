class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :link
      t.string :description
      t.date :from
      t.text :logo
      t.date :published
      t.text :message
      t.text :reply
      t.references :user, index: true
      t.references :admin, index: true
      t.integer :approved

      t.timestamps
    end
  end
end
