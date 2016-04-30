class TutorPatientsController < ApplicationController
  before_action :set_tutor_patient, only: [:show, :edit, :update, :destroy]

  # GET /tutor_patients
  # GET /tutor_patients.json
  def index
    @tutor_patients = TutorPatient.all
  end

  # GET /tutor_patients/1
  # GET /tutor_patients/1.json
  def show
  end

  # GET /tutor_patients/new
  def new
    @tutor_patient = TutorPatient.new
  end

  # GET /tutor_patients/1/edit
  def edit
  end

  # POST /tutor_patients
  # POST /tutor_patients.json
  def create
    @tutor_patient = TutorPatient.new(tutor_patient_params)

    respond_to do |format|
      if @tutor_patient.save
        format.html { redirect_to @tutor_patient, notice: 'Tutor patient was successfully created.' }
        format.json { render :show, status: :created, location: @tutor_patient }
      else
        format.html { render :new }
        format.json { render json: @tutor_patient.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tutor_patients/1
  # PATCH/PUT /tutor_patients/1.json
  def update
    respond_to do |format|
      if @tutor_patient.update(tutor_patient_params)
        format.html { redirect_to @tutor_patient, notice: 'Tutor patient was successfully updated.' }
        format.json { render :show, status: :ok, location: @tutor_patient }
      else
        format.html { render :edit }
        format.json { render json: @tutor_patient.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tutor_patients/1
  # DELETE /tutor_patients/1.json
  def destroy
    @tutor_patient.destroy
    respond_to do |format|
      format.html { redirect_to tutor_patients_url, notice: 'Tutor patient was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tutor_patient
      @tutor_patient = TutorPatient.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tutor_patient_params
      params.require(:tutor_patient).permit(:tutor_id, :patient_id)
    end
end
