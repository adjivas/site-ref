require 'test_helper'

class DiagnosticTreesControllerTest < ActionController::TestCase
  setup do
    @diagnostic_tree = diagnostic_trees(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:diagnostic_trees)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create diagnostic_tree" do
    assert_difference('DiagnosticTree.count') do
      post :create, diagnostic_tree: { diagnostic_id: @diagnostic_tree.diagnostic_id, diagnostic_id: @diagnostic_tree.diagnostic_id }
    end

    assert_redirected_to diagnostic_tree_path(assigns(:diagnostic_tree))
  end

  test "should show diagnostic_tree" do
    get :show, id: @diagnostic_tree
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @diagnostic_tree
    assert_response :success
  end

  test "should update diagnostic_tree" do
    patch :update, id: @diagnostic_tree, diagnostic_tree: { diagnostic_id: @diagnostic_tree.diagnostic_id, diagnostic_id: @diagnostic_tree.diagnostic_id }
    assert_redirected_to diagnostic_tree_path(assigns(:diagnostic_tree))
  end

  test "should destroy diagnostic_tree" do
    assert_difference('DiagnosticTree.count', -1) do
      delete :destroy, id: @diagnostic_tree
    end

    assert_redirected_to diagnostic_trees_path
  end
end
