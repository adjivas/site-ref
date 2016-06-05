class ProjectsController < InheritedResources::Base

  private

    def project_params
      params.require(:project).permit(:name, :link, :description, :published, :logo, :published, :message, :reply, :user_id, :approved)
    end
end

