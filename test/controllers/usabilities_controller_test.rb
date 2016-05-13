require 'test_helper'

class UsabilitiesControllerTest < ActionController::TestCase
  setup do
    @usability = usabilities(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:usabilities)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create usability" do
    assert_difference('Usability.count') do
      post :create, usability: { name: @usability.name }
    end

    assert_redirected_to usability_path(assigns(:usability))
  end

  test "should show usability" do
    get :show, id: @usability
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @usability
    assert_response :success
  end

  test "should update usability" do
    patch :update, id: @usability, usability: { name: @usability.name }
    assert_redirected_to usability_path(assigns(:usability))
  end

  test "should destroy usability" do
    assert_difference('Usability.count', -1) do
      delete :destroy, id: @usability
    end

    assert_redirected_to usabilities_path
  end
end
