require 'pry'
require 'json'

json = File.read('seats.json')
seatsArray = JSON.parse(json)
seatsArray.sort_by!{ |seat| [seat["row"], seat["seat"]]}

seatsArray.each do |seat|
  Seat.create!(seat)
end
