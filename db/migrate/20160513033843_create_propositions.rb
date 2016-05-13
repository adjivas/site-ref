class CreatePropositions < ActiveRecord::Migration
  def change
    create_table :propositions do |t|
      t.date :published
      t.text :message
      t.text :reply
      t.references :user, index: true, foreign_key: true
      t.integer :approved

      t.timestamps null: false
    end
  end
end
