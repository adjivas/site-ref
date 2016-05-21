class DepartementsController < InheritedResources::Base

  private

    def departement_params
      params.require(:departement).permit(:name)
    end
end

