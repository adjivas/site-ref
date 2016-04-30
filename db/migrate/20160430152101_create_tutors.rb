class CreateTutors < ActiveRecord::Migration
  def change
    create_table :tutors do |t|
      t.string :pseudonym
      t.string :email
      t.string :password

      t.timestamps null: false
    end
  end
end
