require 'test_helper'

class StructuresControllerTest < ActionController::TestCase
  setup do
    @structure = structures(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:structures)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create structure" do
    assert_difference('Structure.count') do
      post :create, structure: { address: @structure.address, approved: @structure.approved, departement_id: @structure.departement_id, description: @structure.description, email: @structure.email, juridical_id: @structure.juridical_id, latitude: @structure.latitude, link: @structure.link, longitude: @structure.longitude, message: @structure.message, name: @structure.name, phone: @structure.phone, published: @structure.published, reply: @structure.reply, user_id: @structure.user_id }
    end

    assert_redirected_to structure_path(assigns(:structure))
  end

  test "should show structure" do
    get :show, id: @structure
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @structure
    assert_response :success
  end

  test "should update structure" do
    patch :update, id: @structure, structure: { address: @structure.address, approved: @structure.approved, departement_id: @structure.departement_id, description: @structure.description, email: @structure.email, juridical_id: @structure.juridical_id, latitude: @structure.latitude, link: @structure.link, longitude: @structure.longitude, message: @structure.message, name: @structure.name, phone: @structure.phone, published: @structure.published, reply: @structure.reply, user_id: @structure.user_id }
    assert_redirected_to structure_path(assigns(:structure))
  end

  test "should destroy structure" do
    assert_difference('Structure.count', -1) do
      delete :destroy, id: @structure
    end

    assert_redirected_to structures_path
  end
end
