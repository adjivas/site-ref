require 'test_helper'

class HistogramsControllerTest < ActionController::TestCase
  setup do
    @histogram = histograms(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:histograms)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create histogram" do
    assert_difference('Histogram.count') do
      post :create, histogram: { date: @histogram.date, preamble: @histogram.preamble, title: @histogram.title }
    end

    assert_redirected_to histogram_path(assigns(:histogram))
  end

  test "should show histogram" do
    get :show, id: @histogram
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @histogram
    assert_response :success
  end

  test "should update histogram" do
    patch :update, id: @histogram, histogram: { date: @histogram.date, preamble: @histogram.preamble, title: @histogram.title }
    assert_redirected_to histogram_path(assigns(:histogram))
  end

  test "should destroy histogram" do
    assert_difference('Histogram.count', -1) do
      delete :destroy, id: @histogram
    end

    assert_redirected_to histograms_path
  end
end
