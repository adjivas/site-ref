class PapersController < InheritedResources::Base

  private

    def paper_params
      params.require(:paper).permit(:name, :description, :published, :language_id, :diagnostic_id, :published, :message, :reply, :user_id, :approved)
    end
end

