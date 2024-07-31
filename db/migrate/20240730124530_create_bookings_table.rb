class CreateBookingsTable < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :animal_name, null: false
      t.integer :animal_type, null: false
      t.integer :hours_requested, null: false
      t.date :date_of_service, null: false
      t.integer :price, null: false

      t.timestamps
    end

    add_check_constraint :bookings, 'hours_requested >= 2 AND hours_requested <= 8', name: 'hours_requested_range'
  end
end
