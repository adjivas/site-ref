class HistogramsController < ApplicationController
  before_action :set_histogram, only: [:show, :edit, :update, :destroy]

  # GET /histograms
  # GET /histograms.json
  def index
    @histograms = Histogram.all
  end

  # GET /histograms/1
  # GET /histograms/1.json
  def show
  end

  # GET /histograms/new
  def new
    @histogram = Histogram.new
  end

  # GET /histograms/1/edit
  def edit
  end

  # POST /histograms
  # POST /histograms.json
  def create
    @histogram = Histogram.new(histogram_params)

    respond_to do |format|
      if @histogram.save
        format.html { redirect_to @histogram, notice: 'Histogram was successfully created.' }
        format.json { render :show, status: :created, location: @histogram }
      else
        format.html { render :new }
        format.json { render json: @histogram.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /histograms/1
  # PATCH/PUT /histograms/1.json
  def update
    respond_to do |format|
      if @histogram.update(histogram_params)
        format.html { redirect_to @histogram, notice: 'Histogram was successfully updated.' }
        format.json { render :show, status: :ok, location: @histogram }
      else
        format.html { render :edit }
        format.json { render json: @histogram.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /histograms/1
  # DELETE /histograms/1.json
  def destroy
    @histogram.destroy
    respond_to do |format|
      format.html { redirect_to histograms_url, notice: 'Histogram was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_histogram
      @histogram = Histogram.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def histogram_params
      params.require(:histogram).permit(:title, :date, :preamble)
    end
end
