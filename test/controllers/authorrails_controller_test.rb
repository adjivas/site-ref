require 'test_helper'

class AuthorrailsControllerTest < ActionController::TestCase
  test "should get g" do
    get :g
    assert_response :success
  end

  test "should get controller" do
    get :controller
    assert_response :success
  end

  test "should get Author" do
    get :Author
    assert_response :success
  end

end
