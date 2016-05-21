require 'test_helper'

class ProjectsControllerTest < ActionController::TestCase
  setup do
    @project = projects(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:projects)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create project" do
    assert_difference('Project.count') do
      post :create, project: { author_id: @project.author_id, customizable: @project.customizable, interoperable: @project.interoperable, link: @project.link, link: @project.link, name: @project.name, notation: @project.notation, proposition_id: @project.proposition_id, relation_id: @project.relation_id, usability_id: @project.usability_id }
    end

    assert_redirected_to project_path(assigns(:project))
  end

  test "should show project" do
    get :show, id: @project
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @project
    assert_response :success
  end

  test "should update project" do
    patch :update, id: @project, project: { author_id: @project.author_id, customizable: @project.customizable, interoperable: @project.interoperable, link: @project.link, link: @project.link, name: @project.name, notation: @project.notation, proposition_id: @project.proposition_id, relation_id: @project.relation_id, usability_id: @project.usability_id }
    assert_redirected_to project_path(assigns(:project))
  end

  test "should destroy project" do
    assert_difference('Project.count', -1) do
      delete :destroy, id: @project
    end

    assert_redirected_to projects_path
  end
end
