# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160430164922) do

  create_table "diagnostics", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "dependency"
    t.integer  "dependency_id"
  end

  add_index "diagnostics", ["dependency_id"], name: "index_diagnostics_on_dependency_id"

  create_table "histogram_reference_diagnostics", force: :cascade do |t|
    t.integer  "histogram_id"
    t.integer  "reference_id"
    t.integer  "diagnostic_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "histogram_reference_diagnostics", ["diagnostic_id"], name: "index_histogram_reference_diagnostics_on_diagnostic_id"
  add_index "histogram_reference_diagnostics", ["histogram_id"], name: "index_histogram_reference_diagnostics_on_histogram_id"
  add_index "histogram_reference_diagnostics", ["reference_id"], name: "index_histogram_reference_diagnostics_on_reference_id"

  create_table "histograms", force: :cascade do |t|
    t.string   "title"
    t.date     "date"
    t.string   "preamble"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string   "pseudonym"
    t.string   "email"
    t.string   "password"
    t.date     "birthdate"
    t.integer  "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "references", force: :cascade do |t|
    t.string   "type"
    t.string   "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tutor_patients", force: :cascade do |t|
    t.integer  "tutor_id"
    t.integer  "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tutor_patients", ["patient_id"], name: "index_tutor_patients_on_patient_id"
  add_index "tutor_patients", ["tutor_id"], name: "index_tutor_patients_on_tutor_id"

  create_table "tutors", force: :cascade do |t|
    t.string   "pseudonym"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
