# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

questions = "Who are you?
What are you passionate about?
What are the achievements you are most proud of?
What are you most grateful for in life?
What are the most important things to you in life?
How would you describe yourself?
What are your values? What do you represent? What do you want to embody?
Do you love yourself? Why or Why not?
How can you love yourself more today?
What is your ideal self? What does it mean to be your highest self?
Look at your life now. Are you living the life of your dreams?
If you have one year left to live, what would you do?
If you have one month left to live, what would you do?
If you have one week left to live, what would you do?
If you have one day left to live, what would you do?
If you have an hour left to live, what would you do?
If you have one minute left to live, what would you do?
What would you do today if there is no more tomorrow?
What are the biggest things you’ve learned in life to date?
What advice would you give to yourself three years ago?"

questions = questions.split(/\n/)
questions.each do |question|
  Question.create(title: question)
end
