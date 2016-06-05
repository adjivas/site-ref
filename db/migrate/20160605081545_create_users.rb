class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :link
      t.integer :gender
      t.date :birthdate
      t.integer :patient
      t.date :begin
      t.date :end
      t.boolean :info_research
      t.boolean :email_research
      t.references :departement, index: true, foreign_key: true
      t.references :diagnostic, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
