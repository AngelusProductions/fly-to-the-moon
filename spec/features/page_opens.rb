require 'rails_helper'

feature "user enters page" do
  scenario "and react has div to render" do

    visit root_path

    expect(page.title).to have_content("Seats Project")

    expect(page).to have_css('div#app')

  end
end
