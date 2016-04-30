class CreateHistograms < ActiveRecord::Migration
  def change
    create_table :histograms do |t|
      t.string :title
      t.date :date
      t.string :preamble

      t.timestamps null: false
    end
  end
end
