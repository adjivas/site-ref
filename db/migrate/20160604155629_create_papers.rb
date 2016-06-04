class CreatePapers < ActiveRecord::Migration
  def change
    create_table :papers do |t|
      t.string :name
      t.string :description
      t.date :published
      t.references :language, index: true, foreign_key: true
      t.references :diagnostic, index: true, foreign_key: true
      t.references :proposition, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
