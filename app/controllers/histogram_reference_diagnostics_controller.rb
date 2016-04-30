class HistogramReferenceDiagnosticsController < ApplicationController
  before_action :set_histogram_reference_diagnostic, only: [:show, :edit, :update, :destroy]

  # GET /histogram_reference_diagnostics
  # GET /histogram_reference_diagnostics.json
  def index
    @histogram_reference_diagnostics = HistogramReferenceDiagnostic.all
  end

  # GET /histogram_reference_diagnostics/1
  # GET /histogram_reference_diagnostics/1.json
  def show
  end

  # GET /histogram_reference_diagnostics/new
  def new
    @histogram_reference_diagnostic = HistogramReferenceDiagnostic.new
  end

  # GET /histogram_reference_diagnostics/1/edit
  def edit
  end

  # POST /histogram_reference_diagnostics
  # POST /histogram_reference_diagnostics.json
  def create
    @histogram_reference_diagnostic = HistogramReferenceDiagnostic.new(histogram_reference_diagnostic_params)

    respond_to do |format|
      if @histogram_reference_diagnostic.save
        format.html { redirect_to @histogram_reference_diagnostic, notice: 'Histogram reference diagnostic was successfully created.' }
        format.json { render :show, status: :created, location: @histogram_reference_diagnostic }
      else
        format.html { render :new }
        format.json { render json: @histogram_reference_diagnostic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /histogram_reference_diagnostics/1
  # PATCH/PUT /histogram_reference_diagnostics/1.json
  def update
    respond_to do |format|
      if @histogram_reference_diagnostic.update(histogram_reference_diagnostic_params)
        format.html { redirect_to @histogram_reference_diagnostic, notice: 'Histogram reference diagnostic was successfully updated.' }
        format.json { render :show, status: :ok, location: @histogram_reference_diagnostic }
      else
        format.html { render :edit }
        format.json { render json: @histogram_reference_diagnostic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /histogram_reference_diagnostics/1
  # DELETE /histogram_reference_diagnostics/1.json
  def destroy
    @histogram_reference_diagnostic.destroy
    respond_to do |format|
      format.html { redirect_to histogram_reference_diagnostics_url, notice: 'Histogram reference diagnostic was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_histogram_reference_diagnostic
      @histogram_reference_diagnostic = HistogramReferenceDiagnostic.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def histogram_reference_diagnostic_params
      params.require(:histogram_reference_diagnostic).permit(:histogram_id, :reference_id, :diagnostic_id)
    end
end
