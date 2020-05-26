class Admin::servicesController < ApplicationController
  before_action :find_service, only: %i[show edit update destroy publish]
  SERVICES = ["Part L - SAP & SBEM", "Energy Statements", "Thermal Comfort & Overheating", "Daylight", "BREEAM - WELL", "Water Efficiency"]
  before_action :set_services, only: %i[new edit]
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
      redirect_to admin_service_path(@service)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @service.update(service_params)
      redirect_to admin_service_path(@service)
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
    params.require(:service).permit(:title, :content)
  end
end
