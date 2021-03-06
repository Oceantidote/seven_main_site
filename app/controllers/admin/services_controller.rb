class Admin::ServicesController < ApplicationController
  before_action :find_service, only: %i[show edit update destroy publish]

  def index
    @services = Service.all
  end

  def show
  end

  def new
    @service = Service.new
  end

  def create
    @service = Service.new(service_params)
    if @service.save
      redirect_to admin_services_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @service.update(service_params)
      redirect_to admin_services_path()
    else
      render :edit
    end
  end

  def destroy
    @service.destroy
    redirect_to admin_services_path
  end

  private

  def find_service
    @service = Service.find(params[:id])
  end

  def service_params
    params.require(:service).permit(:title, :content, :photo, :color)
  end
end

