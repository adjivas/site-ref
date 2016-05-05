require 'test_helper'

class TypeMapsControllerTest < ActionController::TestCase
  setup do
    @type_map = type_maps(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:type_maps)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create type_map" do
    assert_difference('TypeMap.count') do
      post :create, type_map: { description: @type_map.description }
    end

    assert_redirected_to type_map_path(assigns(:type_map))
  end

  test "should show type_map" do
    get :show, id: @type_map
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @type_map
    assert_response :success
  end

  test "should update type_map" do
    patch :update, id: @type_map, type_map: { description: @type_map.description }
    assert_redirected_to type_map_path(assigns(:type_map))
  end

  test "should destroy type_map" do
    assert_difference('TypeMap.count', -1) do
      delete :destroy, id: @type_map
    end

    assert_redirected_to type_maps_path
  end
end
