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

ActiveRecord::Schema.define(version: 20160513033910) do

  create_table "authors", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "departements", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "diagnostics", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "help"
    t.integer  "adult"
    t.integer  "diagnostic_id"
    t.integer  "departement_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "diagnostics", ["departement_id"], name: "index_diagnostics_on_departement_id"
  add_index "diagnostics", ["diagnostic_id"], name: "index_diagnostics_on_diagnostic_id"

  create_table "juridicals", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "papers", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.date     "published"
    t.integer  "diagnostic_id"
    t.integer  "proposition_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "papers", ["diagnostic_id"], name: "index_papers_on_diagnostic_id"
  add_index "papers", ["proposition_id"], name: "index_papers_on_proposition_id"

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.string   "from"
    t.string   "link"
    t.integer  "notation"
    t.integer  "interoperable"
    t.integer  "customizable"
    t.integer  "relation_id"
    t.integer  "usability_id"
    t.integer  "proposition_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "projects", ["proposition_id"], name: "index_projects_on_proposition_id"
  add_index "projects", ["relation_id"], name: "index_projects_on_relation_id"
  add_index "projects", ["usability_id"], name: "index_projects_on_usability_id"

  create_table "propositions", force: :cascade do |t|
    t.date     "published"
    t.text     "message"
    t.text     "reply"
    t.integer  "user_id"
    t.integer  "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "propositions", ["user_id"], name: "index_propositions_on_user_id"

  create_table "relations", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "structures", force: :cascade do |t|
    t.string   "name"
    t.integer  "juridical_id"
    t.string   "description"
    t.string   "address"
    t.integer  "longitude"
    t.integer  "latitude"
    t.string   "email"
    t.string   "phone"
    t.integer  "departement_id"
    t.integer  "proposition_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "structures", ["departement_id"], name: "index_structures_on_departement_id"
  add_index "structures", ["juridical_id"], name: "index_structures_on_juridical_id"
  add_index "structures", ["proposition_id"], name: "index_structures_on_proposition_id"

  create_table "usabilities", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "pseudonym"
    t.string   "link"
    t.integer  "patient"
    t.integer  "gender"
    t.date     "birthdate"
    t.date     "begin"
    t.date     "end"
    t.integer  "departement_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "users", ["departement_id"], name: "index_users_on_departement_id"

end
