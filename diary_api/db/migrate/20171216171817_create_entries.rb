class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.integer :question_id
      t.string :title
      t.timestamps
    end
  end
end
