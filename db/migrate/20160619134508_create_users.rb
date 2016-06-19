class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.boolean :is_admin
      t.string :link
      t.integer :gender
      t.date :birthdate
      t.date :begin
      t.date :end
      t.boolean :info_research
      t.boolean :email_research
      t.references :departement, index: true
      t.references :diagnostic, index: true

      t.timestamps
    end
  end
end
