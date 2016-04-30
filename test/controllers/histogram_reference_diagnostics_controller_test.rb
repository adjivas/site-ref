require 'test_helper'

class HistogramReferenceDiagnosticsControllerTest < ActionController::TestCase
  setup do
    @histogram_reference_diagnostic = histogram_reference_diagnostics(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:histogram_reference_diagnostics)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create histogram_reference_diagnostic" do
    assert_difference('HistogramReferenceDiagnostic.count') do
      post :create, histogram_reference_diagnostic: { diagnostic_id: @histogram_reference_diagnostic.diagnostic_id, histogram_id: @histogram_reference_diagnostic.histogram_id, reference_id: @histogram_reference_diagnostic.reference_id }
    end

    assert_redirected_to histogram_reference_diagnostic_path(assigns(:histogram_reference_diagnostic))
  end

  test "should show histogram_reference_diagnostic" do
    get :show, id: @histogram_reference_diagnostic
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @histogram_reference_diagnostic
    assert_response :success
  end

  test "should update histogram_reference_diagnostic" do
    patch :update, id: @histogram_reference_diagnostic, histogram_reference_diagnostic: { diagnostic_id: @histogram_reference_diagnostic.diagnostic_id, histogram_id: @histogram_reference_diagnostic.histogram_id, reference_id: @histogram_reference_diagnostic.reference_id }
    assert_redirected_to histogram_reference_diagnostic_path(assigns(:histogram_reference_diagnostic))
  end

  test "should destroy histogram_reference_diagnostic" do
    assert_difference('HistogramReferenceDiagnostic.count', -1) do
      delete :destroy, id: @histogram_reference_diagnostic
    end

    assert_redirected_to histogram_reference_diagnostics_path
  end
end
