class JuridicalsController < ApplicationController
  before_action :set_juridical, only: [:show, :edit, :update, :destroy]

  # GET /juridicals
  # GET /juridicals.json
  def index
    @juridicals = Juridical.all
  end

  # GET /juridicals/1
  # GET /juridicals/1.json
  def show
  end

  # GET /juridicals/new
  def new
    @juridical = Juridical.new
  end

  # GET /juridicals/1/edit
  def edit
  end

  # POST /juridicals
  # POST /juridicals.json
  def create
    @juridical = Juridical.new(juridical_params)

    respond_to do |format|
      if @juridical.save
        format.html { redirect_to @juridical, notice: 'Juridical was successfully created.' }
        format.json { render :show, status: :created, location: @juridical }
      else
        format.html { render :new }
        format.json { render json: @juridical.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /juridicals/1
  # PATCH/PUT /juridicals/1.json
  def update
    respond_to do |format|
      if @juridical.update(juridical_params)
        format.html { redirect_to @juridical, notice: 'Juridical was successfully updated.' }
        format.json { render :show, status: :ok, location: @juridical }
      else
        format.html { render :edit }
        format.json { render json: @juridical.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /juridicals/1
  # DELETE /juridicals/1.json
  def destroy
    @juridical.destroy
    respond_to do |format|
      format.html { redirect_to juridicals_url, notice: 'Juridical was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_juridical
      @juridical = Juridical.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def juridical_params
      params.require(:juridical).permit(:name)
    end
end
