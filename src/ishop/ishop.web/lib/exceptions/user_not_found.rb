class Exceptions::UserNotFound < Exception
  def initialize(message = "User not found")
    super(message)
  end
end