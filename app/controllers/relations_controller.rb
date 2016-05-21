class RelationsController < InheritedResources::Base

  private

    def relation_params
      params.require(:relation).permit(:name)
    end
end

