class Seat < ApplicationRecord
  validates :letter, presence: true, length: { maximum: 1 }
  validates :row, presence: true, numericality: { only_integer: true, :greater_than => 0 }
  validates :section, presence: true, inclusion: { in: ["First", "Business", "Economy"] }
  validates :occupied, inclusion: { in: [true, false] }
end
