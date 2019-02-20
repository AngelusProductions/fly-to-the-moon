class CreateSeats < ActiveRecord::Migration[5.2]
  def change
    create_table :seats do |t|
      t.string :letter, null: false
      t.integer :row, null: false
      t.string :section, null: false
      t.boolean :occupied, null: false
    end
  end
end
