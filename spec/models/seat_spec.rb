require 'rails_helper'

describe Seat do

  it  { should have_valid(:letter).when("A") }
  it  { should_not have_valid(:letter).when("AB", "") }

  it  { should have_valid(:section).when("First") }
  it  { should_not have_valid(:section).when("Second") }

  it  { should have_valid(:row).when(1) }
  it  { should_not have_valid(:row).when(-1, "one") }

  it  { should have_valid(:occupied).when(true, false) }
  it  { should_not have_valid(:occupied).when(nil) }

end
