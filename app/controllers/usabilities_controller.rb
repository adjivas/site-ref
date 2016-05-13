class UsabilitiesController < ApplicationController
  before_action :set_usability, only: [:show, :edit, :update, :destroy]

  # GET /usabilities
  # GET /usabilities.json
  def index
    @usabilities = Usability.all
  end

  # GET /usabilities/1
  # GET /usabilities/1.json
  def show
  end

  # GET /usabilities/new
  def new
    @usability = Usability.new
  end

  # GET /usabilities/1/edit
  def edit
  end

  # POST /usabilities
  # POST /usabilities.json
  def create
    @usability = Usability.new(usability_params)

    respond_to do |format|
      if @usability.save
        format.html { redirect_to @usability, notice: 'Usability was successfully created.' }
        format.json { render :show, status: :created, location: @usability }
      else
        format.html { render :new }
        format.json { render json: @usability.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /usabilities/1
  # PATCH/PUT /usabilities/1.json
  def update
    respond_to do |format|
      if @usability.update(usability_params)
        format.html { redirect_to @usability, notice: 'Usability was successfully updated.' }
        format.json { render :show, status: :ok, location: @usability }
      else
        format.html { render :edit }
        format.json { render json: @usability.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /usabilities/1
  # DELETE /usabilities/1.json
  def destroy
    @usability.destroy
    respond_to do |format|
      format.html { redirect_to usabilities_url, notice: 'Usability was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_usability
      @usability = Usability.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def usability_params
      params.require(:usability).permit(:name)
    end
end
