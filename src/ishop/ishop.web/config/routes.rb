Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'

  scope '(:locale)', locale: /en|ua|ru|ro/ do

    scope '/api' do
      resources :collections, only: [:show] do
        get :dresses, on: :collection
        get :accessories, on: :collection
      end

      resources :products, only: [] do
        get :top_list, on: :collection
        # get :dresses, on: :collection
        # get :accessories, on: :collection
      end

      resources :sizes, only: [] do
        get :list, on: :collection
      end

      resources :colors, only: [] do
        get :list, on: :collection
      end
    end

    namespace :admin do
      resources :collections, except: [:index, :new, :edit] do
        post :search, on: :collection
        get :list, on: :collection
        post :upload_image, on: :member
          
        resources :products, except: [:index, :new, :edit] do
          # post :search, on: :collection 

          resources :images, only: [:destroy] do
            post :upload, on: :collection
            patch :make_cover, on: :member
          end
        end
      end

      resources :sizes, only: [:create, :update, :destroy] do
        get :list, on: :collection
      end

      resources :colors, only: [:create, :update, :destroy] do
        get :list, on: :collection
      end
    end

  end

  post 'user_token' => 'user_token#create'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
