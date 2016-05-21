class JuridicalsController < InheritedResources::Base

  private

    def juridical_params
      params.require(:juridical).permit(:name)
    end
end

