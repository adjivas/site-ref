class CreatePapers < ActiveRecord::Migration
  def change
    create_table :papers do |t|
      t.string :name
      t.string :description
      t.date :published
      t.references :language, index: true, foreign_key: true
      t.references :diagnostic, index: true, foreign_key: true
      t.date :published
      t.text :message
      t.text :reply
      t.references :user, index: true, foreign_key: true
      t.integer :approved

      t.timestamps null: false
    end
  end
end
