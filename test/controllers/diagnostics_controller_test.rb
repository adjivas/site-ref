require 'test_helper'

class DiagnosticsControllerTest < ActionController::TestCase
  setup do
    @diagnostic = diagnostics(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:diagnostics)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create diagnostic" do
    assert_difference('Diagnostic.count') do
      post :create, diagnostic: { description: @diagnostic.description, title: @diagnostic.title }
    end

    assert_redirected_to diagnostic_path(assigns(:diagnostic))
  end

  test "should show diagnostic" do
    get :show, id: @diagnostic
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @diagnostic
    assert_response :success
  end

  test "should update diagnostic" do
    patch :update, id: @diagnostic, diagnostic: { description: @diagnostic.description, title: @diagnostic.title }
    assert_redirected_to diagnostic_path(assigns(:diagnostic))
  end

  test "should destroy diagnostic" do
    assert_difference('Diagnostic.count', -1) do
      delete :destroy, id: @diagnostic
    end

    assert_redirected_to diagnostics_path
  end
end
