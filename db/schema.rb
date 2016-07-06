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

ActiveRecord::Schema.define(version: 20160629235213) do

  create_table "departements", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "diagnostics", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "help"
    t.integer  "adult"
    t.date     "duration"
    t.integer  "diagnostic_id"
    t.integer  "departement_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "diagnostics", ["departement_id"], name: "index_diagnostics_on_departement_id"
  add_index "diagnostics", ["diagnostic_id"], name: "index_diagnostics_on_diagnostic_id"

  create_table "juridicals", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "languages", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "papers", force: :cascade do |t|
    t.string   "name"
    t.string   "link"
    t.string   "description"
    t.date     "from"
    t.integer  "language_id"
    t.integer  "diagnostic_id"
    t.date     "published"
    t.text     "message"
    t.text     "reply"
    t.integer  "user_id"
    t.integer  "admin_id"
    t.boolean  "approved"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "papers", ["admin_id"], name: "index_papers_on_admin_id"
  add_index "papers", ["diagnostic_id"], name: "index_papers_on_diagnostic_id"
  add_index "papers", ["language_id"], name: "index_papers_on_language_id"
  add_index "papers", ["user_id"], name: "index_papers_on_user_id"

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.string   "link"
    t.string   "description"
    t.date     "from"
    t.text     "logo"
    t.date     "published"
    t.text     "message"
    t.text     "reply"
    t.integer  "user_id"
    t.integer  "admin_id"
    t.boolean  "approved"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "projects", ["admin_id"], name: "index_projects_on_admin_id"
  add_index "projects", ["user_id"], name: "index_projects_on_user_id"

  create_table "structures", force: :cascade do |t|
    t.string   "name"
    t.integer  "juridical_id"
    t.string   "description"
    t.string   "address"
    t.float    "longitude"
    t.float    "latitude"
    t.string   "email"
    t.string   "phone"
    t.string   "link"
    t.integer  "departement_id"
    t.date     "published"
    t.text     "message"
    t.text     "reply"
    t.integer  "user_id"
    t.integer  "admin_id"
    t.boolean  "approved"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "structures", ["admin_id"], name: "index_structures_on_admin_id"
  add_index "structures", ["departement_id"], name: "index_structures_on_departement_id"
  add_index "structures", ["juridical_id"], name: "index_structures_on_juridical_id"
  add_index "structures", ["user_id"], name: "index_structures_on_user_id"

  create_table "users", force: :cascade do |t|
    t.boolean  "is_admin"
    t.string   "link"
    t.boolean  "gender"
    t.date     "birthdate"
    t.date     "begin"
    t.date     "end"
    t.boolean  "info_research"
    t.boolean  "email_research"
    t.integer  "departement_id"
    t.integer  "diagnostic_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.text     "elacombe"
  end

  add_index "users", ["departement_id"], name: "index_users_on_departement_id"
  add_index "users", ["diagnostic_id"], name: "index_users_on_diagnostic_id"
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
