class LanguagesController < InheritedResources::Base

  private

    def language_params
      params.require(:language).permit(:name)
    end
end

