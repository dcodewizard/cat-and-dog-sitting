# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_07_30_124530) do
  create_table "bookings", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "animal_name", null: false
    t.integer "animal_type", null: false
    t.integer "hours_requested", null: false
    t.date "date_of_service", null: false
    t.integer "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.check_constraint "hours_requested >= 2 AND hours_requested <= 8", name: "hours_requested_range"
  end

end
