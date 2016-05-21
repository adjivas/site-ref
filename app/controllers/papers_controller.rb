class PapersController < InheritedResources::Base

  private

    def paper_params
      params.require(:paper).permit(:name, :description, :published, :language_id, :diagnostic_id, :proposition_id)
    end
end

