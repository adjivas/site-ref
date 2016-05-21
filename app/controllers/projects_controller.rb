class ProjectsController < InheritedResources::Base

  private

    def project_params
      params.require(:project).permit(:name, :author_id, :link, :link, :notation, :interoperable, :customizable, :relation_id, :usability_id, :proposition_id)
    end
end

