class AdminController < ApplicationController
  #before_action :require_admin

  def index
    #Category.create(name: 'Category 1')
  end

  def login
    
  end

  private

  def require_admin
    redirect_to root_path unless defined?(current_user) && current_user.admin?
  end
end
