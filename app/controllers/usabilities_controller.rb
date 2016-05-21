class UsabilitiesController < InheritedResources::Base

  private

    def usability_params
      params.require(:usability).permit(:name)
    end
end

