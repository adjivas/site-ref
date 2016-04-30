require 'test_helper'

class TutorPatientsControllerTest < ActionController::TestCase
  setup do
    @tutor_patient = tutor_patients(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tutor_patients)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create tutor_patient" do
    assert_difference('TutorPatient.count') do
      post :create, tutor_patient: { patient_id: @tutor_patient.patient_id, tutor_id: @tutor_patient.tutor_id }
    end

    assert_redirected_to tutor_patient_path(assigns(:tutor_patient))
  end

  test "should show tutor_patient" do
    get :show, id: @tutor_patient
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @tutor_patient
    assert_response :success
  end

  test "should update tutor_patient" do
    patch :update, id: @tutor_patient, tutor_patient: { patient_id: @tutor_patient.patient_id, tutor_id: @tutor_patient.tutor_id }
    assert_redirected_to tutor_patient_path(assigns(:tutor_patient))
  end

  test "should destroy tutor_patient" do
    assert_difference('TutorPatient.count', -1) do
      delete :destroy, id: @tutor_patient
    end

    assert_redirected_to tutor_patients_path
  end
end
