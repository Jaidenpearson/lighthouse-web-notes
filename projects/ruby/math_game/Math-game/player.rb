class Player
  attr_accessor :name, :lives, :score

  def initialize(name = "Player")
    @name = name
    @lives = 3
    @score = 0
  end

  def set_name
    @name = gets.chomp
  end

  def lose_life
    @lives -= 1
  end

  def gain_point
    @score += 1
  end

end
