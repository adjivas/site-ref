require 'test_helper'

class JuridicalsControllerTest < ActionController::TestCase
  setup do
    @juridical = juridicals(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:juridicals)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create juridical" do
    assert_difference('Juridical.count') do
      post :create, juridical: { name: @juridical.name }
    end

    assert_redirected_to juridical_path(assigns(:juridical))
  end

  test "should show juridical" do
    get :show, id: @juridical
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @juridical
    assert_response :success
  end

  test "should update juridical" do
    patch :update, id: @juridical, juridical: { name: @juridical.name }
    assert_redirected_to juridical_path(assigns(:juridical))
  end

  test "should destroy juridical" do
    assert_difference('Juridical.count', -1) do
      delete :destroy, id: @juridical
    end

    assert_redirected_to juridicals_path
  end
end
