class CreateTutorPatients < ActiveRecord::Migration
  def change
    create_table :tutor_patients do |t|
      t.references :tutor, index: true, foreign_key: true
      t.references :patient, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
