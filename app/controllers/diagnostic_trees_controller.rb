class DiagnosticTreesController < ApplicationController
  before_action :set_diagnostic_tree, only: [:show, :edit, :update, :destroy]

  # GET /diagnostic_trees
  # GET /diagnostic_trees.json
  def index
    @diagnostic_trees = DiagnosticTree.all
  end

  # GET /diagnostic_trees/1
  # GET /diagnostic_trees/1.json
  def show
  end

  # GET /diagnostic_trees/new
  def new
    @diagnostic_tree = DiagnosticTree.new
  end

  # GET /diagnostic_trees/1/edit
  def edit
  end

  # POST /diagnostic_trees
  # POST /diagnostic_trees.json
  def create
    @diagnostic_tree = DiagnosticTree.new(diagnostic_tree_params)

    respond_to do |format|
      if @diagnostic_tree.save
        format.html { redirect_to @diagnostic_tree, notice: 'Diagnostic tree was successfully created.' }
        format.json { render :show, status: :created, location: @diagnostic_tree }
      else
        format.html { render :new }
        format.json { render json: @diagnostic_tree.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /diagnostic_trees/1
  # PATCH/PUT /diagnostic_trees/1.json
  def update
    respond_to do |format|
      if @diagnostic_tree.update(diagnostic_tree_params)
        format.html { redirect_to @diagnostic_tree, notice: 'Diagnostic tree was successfully updated.' }
        format.json { render :show, status: :ok, location: @diagnostic_tree }
      else
        format.html { render :edit }
        format.json { render json: @diagnostic_tree.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /diagnostic_trees/1
  # DELETE /diagnostic_trees/1.json
  def destroy
    @diagnostic_tree.destroy
    respond_to do |format|
      format.html { redirect_to diagnostic_trees_url, notice: 'Diagnostic tree was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_diagnostic_tree
      @diagnostic_tree = DiagnosticTree.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def diagnostic_tree_params
      params.require(:diagnostic_tree).permit(:diagnostic_id, :diagnostic_id)
    end
end
