class CreatePapers < ActiveRecord::Migration
  def change
    create_table :papers do |t|
      t.string :name
      t.string :link
      t.string :description
      t.date :from
      t.references :language, index: true
      t.references :diagnostic, index: true
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
