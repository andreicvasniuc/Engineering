class User
  include Mongoid::Document
  include Mongoid::Timestamps

  field :email, type: String
  field :password_digest, type: String
  field :is_admin, type: Boolean

  index email: 1
  index password_digest: 1
end
