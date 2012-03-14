module Api
  
class PurchasesController < ApplicationController
  
  def index
    @purchases = Purchase.where(:profile_id => params[:profile_id])
    render(:json => @purchases.map(&:to_hash))
  end
  
  def create
    @purchase = Purchase.find_or_create_by_profile_id_and_app_id(params[:profile_id], @app.id)
    render(:json => @purchase.to_hash)
  end
  
  def destroy
    @purchase = Purchase.find_by_profile_id_and_app_id(params[:profile_id], @app.id)
    @purchase.destroy
    render(:json => @purchase.to_hash)
  end
  
end

end
