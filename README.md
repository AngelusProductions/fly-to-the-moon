# Corey Angelus's Submission

Thank you for inviting me to participate in this challenge. Below are a few instructions and notes to get it working.

**Getting Started:**

- if you do not have Ruby on Rails, React or PostgreSQL installed, please do so
- run `$ bundle`
- run `$ bundle exec rake db:drop && bundle exec rake db:create && bundle exec rake db:migrate && bundle exec rake db:rollback && bundle exec rake db:migrate && bundle exec rake db:seed`
- run `$ yarn install`
- run `$ rails s`
- in another tab, run `$ yarn run start`
- navigate to `localhost:3000`
- run `$ rspec` to run test suites

**Notes:**

- I had to rename the `class` attribute to `section` because in Rails, "class" is a reserved word
- I chose to rename the `seat` attribute to `letter` because my model name is also `Seat` aka. ~`Seat.seat`~
- I really don't like using `dangerouslySetInnerHTML` nor inline-styling in general but as we discussed on the phone last week, I am not familiar with an alternative when passing variables from Javascript to CSS. 
- I didn't bother with Enzyme, Karma nor Phantom.js tests on the React end of things since interactivity is minimal.
- Also, I sincerely apologize for the pull requests to [lola-travel](https://github.com/lolatravel/seats-project). This was obviously a mistake. I am not used to working on forked repos but am used to quickly submitting pull requests to the default repo ...that being lolatravel's seats-project/master. 

Overall, I had fun working on this and look forward to hearing your feedback. 
