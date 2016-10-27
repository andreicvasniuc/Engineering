class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword

  field :email, type: String
  field :password_digest, type: String
  field :is_admin, type: Boolean

  index email: 1
  index password_digest: 1

  has_secure_password

  def from_token_request
    iputs 'from_token_request'
  end

  def from_token_payload
    iputs 'from_token_payload'
  end
end
