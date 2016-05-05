class TypeMapsController < ApplicationController
  before_action :set_type_map, only: [:show, :edit, :update, :destroy]

  # GET /type_maps
  # GET /type_maps.json
  def index
    @type_maps = TypeMap.all
  end

  # GET /type_maps/1
  # GET /type_maps/1.json
  def show
  end

  # GET /type_maps/new
  def new
    @type_map = TypeMap.new
  end

  # GET /type_maps/1/edit
  def edit
  end

  # POST /type_maps
  # POST /type_maps.json
  def create
    @type_map = TypeMap.new(type_map_params)

    respond_to do |format|
      if @type_map.save
        format.html { redirect_to @type_map, notice: 'Type map was successfully created.' }
        format.json { render :show, status: :created, location: @type_map }
      else
        format.html { render :new }
        format.json { render json: @type_map.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /type_maps/1
  # PATCH/PUT /type_maps/1.json
  def update
    respond_to do |format|
      if @type_map.update(type_map_params)
        format.html { redirect_to @type_map, notice: 'Type map was successfully updated.' }
        format.json { render :show, status: :ok, location: @type_map }
      else
        format.html { render :edit }
        format.json { render json: @type_map.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /type_maps/1
  # DELETE /type_maps/1.json
  def destroy
    @type_map.destroy
    respond_to do |format|
      format.html { redirect_to type_maps_url, notice: 'Type map was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_type_map
      @type_map = TypeMap.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def type_map_params
      params.require(:type_map).permit(:description)
    end
end
