class StructuresController < InheritedResources::Base

  private

    def structure_params
      params.require(:structure).permit(:name, :juridical_id, :description, :address, :longitude, :latitude, :email, :phone, :link_id, :departement_id, :proposition_id)
    end
end

