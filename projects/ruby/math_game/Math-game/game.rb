class Game

  def initialize(player1, player2)
    @players = [Player.new, Player.new]
    @current_player = @players[0]
  end

  def check_winner
    @players.each do |player|
      if player.lives == 0
        game_over(player, false)
        return
      elsif player.score == 3
        game_over(player, true)
        return
      end
    end
  end

  def switch_player
    @current_player = (@current_player == @players[0]) ? @players[1] : @players[0]
  end

  def game_over(winner, won)
    if won
      puts "#{winner.name} wins with a score of #{winner.score}!"
    else
      puts "Game Over! #{winner.name} has died."
    end
    exit
  end

  def generate_question(player)
    num1 = rand(1..20)
    num2 = rand(1..20)
    answer = num1 + num2
    puts "#{player.name}, what does #{num1} plus #{num2} equal?"
    return num1, num2, answer
  end

  def is_correct(player_answer, answer)
    player_answer == answer
  end

  def ask_question(player)
    num1, num2, answer = generate_question(player)
    player_answer = gets.chomp.to_i
    if is_correct(player_answer, answer)
      puts "Correct!"
      assign_score(player, true)
      puts "#{player.name} has #{player.lives} lives and a score of #{player.score}"
    else
      puts "Incorrect!"
      assign_score(player, false)
      puts "#{player.name} has #{player.lives} lives and a score of #{player.score}"
    end
  end

  def assign_score(player, is_correct)
    if is_correct
      player.gain_point()
    else
      player.lose_life()
    end
  end

  def start_game
    puts "Welcome to the Math Game!"
    puts "Player 1, please enter your name:"
    @players[0].set_name()
    puts "Player 2, please enter your name:"
    @players[1].set_name()

    loop do
      check_winner()
      ask_question(@current_player)
      switch_player()
    end
  end
end
