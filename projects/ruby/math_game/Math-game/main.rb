require_relative 'game'
require_relative 'player'

class Main
  def initialize
    @players = [Player.new, Player.new]
    @game = Game.new(@players[0], @players[1])
    @game.start_game
  end
end

if __FILE__ == $0
  Main.new
end